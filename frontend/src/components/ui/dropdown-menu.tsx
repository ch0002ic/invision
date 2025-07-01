import * as React from "react";

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  align?: string;
}
export const DropdownMenu: React.FC<DropdownMenuProps> = (props) => <div {...props} />;
export const DropdownMenuTrigger: React.FC<DropdownMenuProps> = (props) => <div {...props} />;
export const DropdownMenuContent: React.FC<DropdownMenuProps> = (props) => <div {...props} />;
export const DropdownMenuItem: React.FC<DropdownMenuProps> = (props) => <div {...props} />;
export default DropdownMenu;
