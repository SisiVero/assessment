import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  width?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  width,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-[100px] font-medium transition duration-200 ";

  const variantStyles = {
    primary:
      "bg-Primary text-white text-base",
    secondary:
      "bg-Secondary text-Gray text-base",
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        disabled ? 'cursor-not-allowed bg-[#DBDEE5]' : 'cursor-pointer',
        width && `w-[${width}]`,
        className
      )}
    >
      {children}
    </button>
  );
}
