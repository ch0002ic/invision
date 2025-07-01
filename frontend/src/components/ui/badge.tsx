import * as React from "react";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;
export const Badge: React.FC<BadgeProps> = (props) => <span {...props} />;
export default Badge;
