import * as React from "react";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef(
  ({ className, type, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center bg-inherit min-h-5 justify-center",
          className
        )}
      >
        <hr className="w-full border-1 border-gray-300" />
        <div className="absolute px-4 -translate-x-1/2 bg-inherit left-1/2 ">
          {children}
        </div>
      </div>
    );
  }
);

Separator.displayName = "Input";
export { Separator };
