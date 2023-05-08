import { createContext, useState } from "react";

export const IsPlayingContext = createContext();

export const IsPlayingProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <IsPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </IsPlayingContext.Provider>
  );
};
