import React from "react";

function BGButton({ coloraList = [], onColerChange }) {
  return (
    <>
      {coloraList.map((c, i) => {
        return (
          <button
            onClick={(e) => onColerChange(c.color)}
            type="button"
            key={i}
            className={`rounded-3xl px-4 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  ${c.className}`}
          >
            {c.color}
          </button>
        );
      })}
    </>
  );
}

export default BGButton;
