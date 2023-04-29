import React, { useContext, useState } from "react";
import { openai } from "../libs/openai";
import styles from "../src/styles/input.module.css";
import { IsPlayingContext } from "../libs/context/IsPlayingContext";

export const TextToSpeech = ({ onAiResponse }) => {
  const [userText, setUserText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const { isPlaying, setIsPlaying } = useContext(IsPlayingContext);
  const MAX_TOKENS = 200;

  const synth = typeof window != "undefined" ? window.speechSynthesis : null;
  const voices = synth ? synth.getVoices() : [];
  const selectedVoices = voices.find((voice) => voice.name == "Google 日本語");
  const checkVoiceAvailability = () => {
    if (!selectedVoices) {
      console.error("音声が利用できません");
      setIsPlaying(false);
      return false;
    }
    return true;
  };
  const speak = (textToSpeak) => {
    if (!checkVoiceAvailability()) {
      return;
    }
    if (synth.pending || synth.speaking || synth.paused) {
      synth.cancel();
    }
    const trimmedText = textToSpeak.slice(0, MAX_TOKENS);

    setAiResponse(trimmedText);
    setShowBubble(true);

    const utterance = new SpeechSynthesisUtterance(trimmedText);
    utterance.voice = selectedVoices;
    utterance.rate = 1;
    synth.speak(utterance);
    setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      setTimeout(() => {
        setShowBubble(false);
      }, 3000);
    };
    utterance.onerror = () => {
      setTimeout(() => {
        setIsPlaying(false);
      }, 500);
    };
  };

  const handleUserText = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const message = await openai(userText);
      onAiResponse(message); // この行を追加
      speak(message);
    } catch (err) {
      let message = "";
      if (err) message = err.message;
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
