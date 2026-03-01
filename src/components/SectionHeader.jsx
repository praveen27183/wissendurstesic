const SectionHeader = ({ title, subtitle, className = '', centered = true }) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
