import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ComponentsTag } from "@/constants";
import Link from "next/link";

const Componentscrollarea = () => {
  return (
    <main className="max-w-[240px] xl:max-w-[270px] w-full">
      <ScrollArea className="max-w-[240px] xl:max-w-[270px] w-full h-[640px] rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 body-medium">Components</h4>
          {ComponentsTag.map((tag) => (
            <div key={tag.key} className="flex-column-start mb-1.5">
              <Link href={tag.href} className="body-regular text-gray-600">
                {tag.label}
              </Link>
            </div>
          ))}
        </div>
      </ScrollArea>
    </main>
  );
};

export default Componentscrollarea;
