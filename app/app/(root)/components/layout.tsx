import Componentscrollarea from "@/components/ui/componentscrollarea";
import React from "react";

const ComponentLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="container-2xl mt-8 flex justify-between">
      <Componentscrollarea />
      {children}
    </main>
  );
};

export default ComponentLayout;
