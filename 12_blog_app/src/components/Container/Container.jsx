import React from "react";

function Container({ children }) {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4">
      <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
        {children}
      </div>
    </div>
  );
}

export default Container;
