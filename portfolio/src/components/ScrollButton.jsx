import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 focus:outline-none"
      onClick={handleScrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollButton;
