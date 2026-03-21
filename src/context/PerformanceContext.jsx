import React, { createContext, useContext, useEffect, useState } from 'react';
import { isLowPerformanceDevice } from '../utils/performance';

const PerformanceContext = createContext({
  isLowPerf: false,
});

export const usePerformance = () => useContext(PerformanceContext);

export const PerformanceProvider = ({ children }) => {
  const [isLowPerf, setIsLowPerf] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      const lowPerf = isLowPerformanceDevice();
      setIsLowPerf(lowPerf);
      
      if (lowPerf) {
        document.documentElement.classList.add('is-low-perf');
      } else {
        document.documentElement.classList.remove('is-low-perf');
      }
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return (
    <PerformanceContext.Provider value={{ isLowPerf }}>
      {children}
    </PerformanceContext.Provider>
  );
};
