import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-[#9B9AF3] text-white px-4 py-2 rounded-full hover:bg-[#7E69D3] "
      onClick={handleScrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollButton;
