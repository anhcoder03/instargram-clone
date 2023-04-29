import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full h-full max-w-full min-h-screen bg-primary">
      <Sidebar></Sidebar>
      <div className="ml-[250px] w-full">{children}</div>
    </div>
  );
};

export default Layout;
