import React, { useContext, useState } from "react";
import { openai } from "../libs/openai";
import styles from "../src/styles/input.module.css";
import { IsPlayingContext } from "../libs/context/IsPlayingContext";

export const TextToSpeech = () => {
  const [userText, setUserText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isPlaying, setIsPlaying } = useContext(IsPlayingContext);

  const synth = typeof window != "undefined" ? window.speechSynthesis : null;
  const voices = synth ? synth.getVoices() : [];
  const selectedVoices = voices.find((voice) => voice.name == "Google 日本語");
  const speak = (textToSpeak) => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = selectedVoices;
    utterance.rate = 1;
    synth.speak(utterance);
    setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
    };
  };

  const handleUserText = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const message = await openai(userText);
      speak(message);
    } catch (err) {
      let message = "";
      if (err) message = err.message;
      console.log(message);
    } finally {
      setIsLoading(false);
      setUserText("");
    }
  };
  return (
    <div className={styles.formBox}>
      <form className={styles.form} onSubmit={handleUserText}>
        <input
          type="text"
          className={styles.textInput}
          placeholder="何か尋ねてみてください"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <button className={styles.ask} disabled={isLoading}>
          {isLoading ? "thinking..." : "Ask"}
        </button>
      </form>
    </div>
  );
};
