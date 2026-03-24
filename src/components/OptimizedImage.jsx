import React, { useState } from 'react';


const OptimizedImage = ({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
  sizes,
  ...props
}) => {

  const [error, setError] = useState(false);

  const loadingStrategy = priority ? "eager" : "lazy";
  const decodingStrategy = "async";
  const fetchPriority = priority ? "high" : "auto";



  if (error) {
    return (
      <div 
        className={`${className} bg-st-dark/50 flex items-center justify-center border border-white/10`}
        style={{ width, height }}
      >
        <span className="text-[10px] text-white/40 uppercase tracking-widest">Image Unavailable</span>
      </div>
    );
  }

  return (
    <picture>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500`}

        width={width}
        height={height}
        loading={loadingStrategy}
        decoding={decodingStrategy}
        fetchpriority={fetchPriority}
        sizes={sizes}
        onError={() => setError(true)}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
