import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, ...props }, ref) => (
  <button ref={ref} data-variant={variant} data-size={size} {...props} />
));
Button.displayName = "Button";
export default Button;
