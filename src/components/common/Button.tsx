import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = "px-8 py-4 font-display font-bold rounded-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary/80 text-background hover:opacity-90 active:scale-95 shadow-lg shadow-primary/20",
    secondary: "bg-surface-bright text-on-background hover:bg-surface-muted border border-white/10",
    outline: "border border-primary text-primary hover:bg-primary/10",
    ghost: "text-on-surface-variant hover:text-primary hover:bg-white/5"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin text-current" />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
