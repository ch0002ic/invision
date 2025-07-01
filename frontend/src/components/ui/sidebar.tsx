import React from "react"
export const Sidebar: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const SidebarContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const SidebarFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const SidebarGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const SidebarGroupContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const SidebarGroupLabel: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const SidebarHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)
export const SidebarMenu: React.FC<React.HTMLAttributes<HTMLUListElement>> = (props) => (
  <ul {...props} />
)
export const SidebarMenuButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button {...props} />
)
export const SidebarMenuItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = (props) => (
  <li {...props} />
)
export const SidebarProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => <>{children}</>
export default Sidebar;
