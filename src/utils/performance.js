export const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false;

  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  
  // Basic hardware checks
  const mem = navigator.deviceMemory || 8; // GB
  const cpu = navigator.hardwareConcurrency || 8; // cores
  
  // Screen width check
  const isMobile = window.innerWidth <= 768;

  // Conditions for low performance mode:
  // 1. Android devices that are not "high-end" (less than 4GB RAM or 4 cores)
  // 2. Any mobile device with very low RAM (less than 2GB)
  // 3. Optional: manual override via URL param ?perf=low
  
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('perf') === 'low') return true;

  if (isAndroid) {
    // Android is often more sensitive to heavy effects even on mid-range hardware
    return mem < 4 || cpu < 4 || isMobile;
  }

  // Non-Android but very low end
  if (mem <= 2 || cpu <= 2) return true;

  return false;
};
