import React from "react"

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ checked = false, onCheckedChange, ...props }) => (
  <button
    aria-pressed={checked}
    onClick={e => {
      onCheckedChange && onCheckedChange(!checked);
      props.onClick && props.onClick(e);
    }}
    {...props}
  />
)

export default Switch;
