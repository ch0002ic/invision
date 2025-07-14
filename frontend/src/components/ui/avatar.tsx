import * as React from "react";

export type AvatarProps = React.HTMLAttributes<HTMLDivElement>;
export const Avatar: React.FC<AvatarProps> = (props) => <div {...props} />;

export type AvatarImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export const AvatarImage: React.FC<AvatarImageProps> = (props) => <img alt="" {...props} />;

export type AvatarFallbackProps = React.HTMLAttributes<HTMLDivElement>;
export const AvatarFallback: React.FC<AvatarFallbackProps> = (props) => <div {...props} />;

export default Avatar;
