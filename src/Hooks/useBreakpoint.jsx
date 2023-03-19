import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(window.innerWidth);
  const onResize = () => {
    setBreakpoint(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
