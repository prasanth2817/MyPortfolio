import React, { useState, useEffect } from "react";

const DynamicText = () => {
  const texts = [
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    "Full-stack Developer",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setDisplayedText(
            (prev) => prev + texts[currentTextIndex].charAt(currentCharIndex)
          );
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Wait for 2 seconds before deleting
        }
      } else {
        if (currentCharIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const intervalId = setInterval(handleTyping, isDeleting ? 100 : 150); 

    return () => clearInterval(intervalId);
  }, [currentCharIndex, isDeleting, texts, currentTextIndex]);

  return <span className="text-red-700">{displayedText}</span>;
};

export default DynamicText;
