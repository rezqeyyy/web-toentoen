import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-2.5 rounded-full font-bold transition-all duration-200";
  
  // Menggunakan warna custom yang mirip dengan gambar (teal/cyan)
  const variants = {
    primary: "bg-[#00c2a8] text-white hover:bg-[#00a892]",
    outline: "border-2 border-[#00c2a8] text-[#00c2a8] hover:bg-gray-50"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};