"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. Initialize the audio object
    audioRef.current = new Audio("/assets/photography/wish-you-were-here.wav");

    // Optional: Loop the background music automatically
    audioRef.current.loop = true;

    // 2. The function that actually plays the music
    const playMusic = async (): Promise<void> => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        console.log("Music is playing!");

        // Once it successfully plays, remove the listeners so this doesn't fire on every click
        removeListeners();
      } catch (error) {
        // If it fails, it just waits quietly for the next interaction
        console.warn("Waiting for user interaction to play music...");
      }
    };

    // 3. Try to play immediately (this might work if the user recently refreshed the page)
    playMusic();

    // 4. Set up global listeners for ANY interaction
    const handleInteraction = (): void => {
      playMusic();
    };

    const addListeners = (): void => {
      document.addEventListener("click", handleInteraction);
      document.addEventListener("keydown", handleInteraction);
      document.addEventListener("touchstart", handleInteraction);
    };

    const removeListeners = (): void => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };

    addListeners();

    // 5. Cleanup when the component is removed
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Clear memory
      }
      removeListeners();
    };
  }, []);

  // Return null because this component has no UI (no button)
  return null;
}
