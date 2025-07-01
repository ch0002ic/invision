import React from "react"

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number[];
  onValueChange?: (value: number[]) => void;
  max?: number;
  step?: number;
}

export const Slider: React.FC<SliderProps> = ({ value = [0], onValueChange, max = 100, step = 1, ...props }) => (
  <div {...props}>
    <input
      type="range"
      value={value[0]}
      max={max}
      step={step}
      onChange={e => onValueChange && onValueChange([Number(e.target.value)])}
      style={{ width: '100%' }}
    />
  </div>
)

export default Slider;
