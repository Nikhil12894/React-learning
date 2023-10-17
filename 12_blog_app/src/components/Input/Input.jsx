import { forwardRef } from "react";
import React, { useId } from "react";
const Input = forwardRef(
  ({ type = "text", label, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label className="inline-block mb-1 pl-1" htmlFor={id}>
            {label}
            <input
              ref={ref}
              type={type}
              className={`px-3 py-2 rounded-lg bg-white text-black dark:bg-slate-700 dark:text-white outline-none focus:bg-slate-50 dark:focus:bg-slate-600 border border-gray-200 dark:border-slate-200 w-full ${className}`}
              id={id}
              {...props}
            />
          </label>
        )}
      </div>
    );
  }
);
