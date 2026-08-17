import React, { useState, useEffect } from 'react';

const Typewriter = ({
  words = [],
  typingDelay = 200,
  deletingDelay = 100,
  pauseDelay = 2000,
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (!isDeleting && text.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingDelay);
    } else if (!isDeleting && text.length === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && text.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingDelay);
    } else if (isDeleting && text.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setWordIndex(prev => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingDelay, deletingDelay, pauseDelay]);

  return <span className="typewriter-text">{text}</span>;
};

export default Typewriter;