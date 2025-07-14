import React from "react"
import clsx from "clsx"

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onCheckedChange,
  className,
  ...props
}) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={(e) => {
        onCheckedChange?.(!checked)
        props.onClick?.(e)
      }}
      className={clsx(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        checked ? "bg-green-500" : "bg-gray-300",
        className
      )}
      {...props}
    >
      <span
        className={clsx(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  )
}

export default Switch
