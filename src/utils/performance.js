export const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false;

  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  const isIos = /iPhone|iPad|iPod/i.test(ua);
  const isDesktop = !/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  
  // Basic hardware checks
  const mem = navigator.deviceMemory || 8; // GB
  const cpu = navigator.hardwareConcurrency || 8; // cores
  
  // Manual override via URL param ?perf=low
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('perf') === 'low') return true;
  if (urlParams.get('perf') === 'high') return false;

  // Requirements:
  // - On iOS and Desktop (PC): Use FULL UI
  // - On low-end Android devices (RAM <= 4GB): Use LIGHTWEIGHT UI
  
  if (isIos || isDesktop) {
    return false;
  }

  if (isAndroid) {
    // Android + low RAM (<= 4GB) → fallback mode
    return mem <= 4;
  }

  // Fallback for other mobile devices
  return mem < 4 || cpu < 4;
};
