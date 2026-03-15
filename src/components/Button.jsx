const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 uppercase text-sm tracking-wide';

  const variants = {
    primary: 'bg-gradient-to-r from-[#ff003c] to-[#ff1a1a] text-white shadow-[0_0_20px_rgba(255,0,60,0.6)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,60,0.8)]',
    secondary: 'bg-transparent border border-[#2563ff] text-[#cbd5e1] hover:text-white shadow-[0_0_15px_rgba(37,99,255,0.6)] hover:shadow-[0_0_25px_rgba(37,99,255,0.8)] hover:scale-105',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#050505]'
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
