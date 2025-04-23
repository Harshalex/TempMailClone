import React from "react";

function Loader() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-slate-600 border-t-transparent border-solid rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-600 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
