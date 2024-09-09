import AppUiscrollarea from "@/components/ui/appuiscroll";
import React from "react";

const ComponentLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="container-2xl mt-8 flex justify-between">
      <AppUiscrollarea />
      {children}
    </main>
  );
};

export default ComponentLayout;
