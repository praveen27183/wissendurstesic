const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 uppercase text-sm tracking-wide';

  const variants = {
    primary: 'bg-[#4A0404] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#4A0404] border-2 border-[#D4AF37] hover:scale-105 hover:shadow-lg',
    secondary: 'bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D1B1B]',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2D1B1B]'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
