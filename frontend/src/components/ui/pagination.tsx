import React from "react"
export const Pagination: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const PaginationContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const PaginationEllipsis: React.FC = () => <span>...</span>;
export const PaginationItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const PaginationLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { isActive?: boolean }> = ({ isActive, ...props }) => (
  <a {...props} style={isActive ? { fontWeight: 'bold' } : {}} />
)
export const PaginationNext: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => (
  <a {...props} />
)
export const PaginationPrevious: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => (
  <a {...props} />
)
export default Pagination;
