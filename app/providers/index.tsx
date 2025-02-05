"use client";
import ReactQueryProvider from "./query-provider";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default RootProvider;
