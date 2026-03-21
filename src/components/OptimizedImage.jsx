import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  priority = false, 
  width, 
  height,
  ...props 
}) => {
  // Assuming ViteImageOptimizer handles WebP conversion, 
  // we can potentially append .webp or use <picture> if we have multiple versions.
  // For now, let's focus on the essential performance tags.

  return (
    <picture>
      {/* If we have specific webp sources we could add them here */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchpriority={priority ? "high" : "auto"}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
