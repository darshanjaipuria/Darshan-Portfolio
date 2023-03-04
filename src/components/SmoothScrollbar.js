import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Scrollbar from 'react-smooth-scrollbar';

const SmoothScrollBar = ({ children }) => {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0);
  }, [pathname]);
  return (
    <Scrollbar ref={ref} damping="0.07">
      {children}
    </Scrollbar>
  );
};

export default SmoothScrollBar;
