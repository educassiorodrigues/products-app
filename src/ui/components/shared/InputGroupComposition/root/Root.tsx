import { ReactNode } from "react";

interface RootProps {
    children: ReactNode;
  }
  
  export function Root({ children }: RootProps) {
    return <div className="flex flex-col justify-start gap-2">{children}</div>;
  }