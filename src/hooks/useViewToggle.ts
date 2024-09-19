import { useState } from 'react';

const useViewToggle = () => {
  const [isCardView, setIsCardView] = useState(false);

  const toggleView = () => {
    setIsCardView((prev: boolean) => !prev);
  };

  return {
    isCardView,
    toggleView,
  };
};

export default useViewToggle;
