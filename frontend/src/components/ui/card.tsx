import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;
export const Card: React.FC<CardProps> = (props) => <div {...props} />;

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
export const CardContent: React.FC<CardContentProps> = (props) => <div {...props} />;

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export const CardHeader: React.FC<CardHeaderProps> = (props) => <div {...props} />;

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export const CardTitle: React.FC<CardTitleProps> = (props) => <h2 {...props} />;

export default Card;
