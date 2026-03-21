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
    return () => {};
  }, []);

  return (
    <PerformanceContext.Provider value={{ isLowPerf }}>
      {children}
    </PerformanceContext.Provider>
  );
};
