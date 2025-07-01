import * as React from "react";

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: () => void;
}
export const Dialog: React.FC<DialogProps> = (props) => <div {...props} />;
export const DialogContent: React.FC<DialogProps> = (props) => <div {...props} />;
export const DialogHeader: React.FC<DialogProps> = (props) => <div {...props} />;
export type DialogTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export const DialogTitle: React.FC<DialogTitleProps> = (props) => <h2 {...props} />;
export default Dialog;
