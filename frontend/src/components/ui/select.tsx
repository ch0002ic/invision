import React from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value?: string;
  onValueChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children, ...props }) => (
  <select
    value={value}
    onChange={e => onValueChange && onValueChange(e.target.value)}
    {...props}
  >
    {children}
  </select>
)

export const SelectContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)

interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, children, ...props }) => (
  <option value={value} {...props}>{children}</option>
)

export const SelectTrigger: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const SelectValue: React.FC<React.HTMLAttributes<HTMLSpanElement>> = (props) => (
  <span {...props} />
)

export default Select;
