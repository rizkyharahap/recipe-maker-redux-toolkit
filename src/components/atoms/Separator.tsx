import React from "react";

export interface SeparatorProps
  extends React.DetailsHTMLAttributes<HTMLDivElement> {}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`shrink-0 bg-border h-[1px] w-full my-6 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Separator.displayName = "Separator";

export { Separator };
