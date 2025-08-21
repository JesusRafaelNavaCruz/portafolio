"use client";
import React, { useEffect, useState } from "react";

interface TypewritterProps {
  words: Array<string>;
  loop?: boolean;
}

export default function Typewritter({ words, loop }: TypewritterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    let typingSpeed = isDeleting ? 50 : 150;
    
    const handleTyping = () => {
        const currentWord = words[wordIndex];
        if (!isDeleting) {
            setText(currentWord.slice(0, text.length + 1))
        } else {
            setText(currentWord.slice(0, text.length - 1))
        }

        if (!isDeleting && text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }
    }

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);

  }, [text, isDeleting, wordIndex, words])

  return (
    <div className="block bg-gradient-to-r from-[#22D3EE] via-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent animate-gradient-x">
      {text}
    </div>
  );
}
