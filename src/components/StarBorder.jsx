import React from 'react';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '8s',
  thickness = 3,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
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
      <div className="relative z-10 bg-gradient-to-b from-[#111111]/90 to-black border border-gray-800/50 text-white text-center rounded-[20px] w-full h-full flex items-center justify-center backdrop-blur-md transition-all hover:bg-black/50">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
