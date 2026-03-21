import { usePerformance } from '../context/PerformanceContext';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '8s',
  thickness = 2,
  children,
  ...rest
}) => {
  const { isLowPerf } = usePerformance();
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
      {!isLowPerf && (
        <>
          <div
            className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
            style={{
              background: `radial-gradient(circle, ${color}, transparent 20%)`,
              animationDuration: speed
            }}
          ></div>
          <div
            className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
            style={{
              background: `radial-gradient(circle, ${color}, transparent 20%)`,
              animationDuration: speed,
              animationDelay: `calc(${speed} / -2)`
            }}
          ></div>
          <div
            className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
            style={{
              background: `radial-gradient(circle, ${color}, transparent 20%)`,
              animationDuration: speed
            }}
          ></div>
          <div
            className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
            style={{
              background: `radial-gradient(circle, ${color}, transparent 20%)`,
              animationDuration: speed,
              animationDelay: `calc(${speed} / -2)`
            }}
          ></div>
        </>
      )}
      <div 
        className={`relative z-10 ${isLowPerf ? 'bg-[#0f0f14]' : 'bg-gradient-to-b from-[#0f0f14]/90 to-[#050505] border border-gray-800/50 backdrop-blur-md shadow-[0_0_15px_rgba(255,0,60,0.1)]'} text-white text-center rounded-[20px] w-full h-full flex items-center justify-center transition-all hover:bg-[#0f0f14]/50 hover:shadow-[0_0_15px_rgba(255,0,60,0.3)]`}
        style={isLowPerf ? { border: `1.5px solid ${color}` } : {}}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
