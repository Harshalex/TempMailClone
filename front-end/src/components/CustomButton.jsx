import React from "react";

function CustomButton({ icon, text, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-40 shadow-md text-lg cursor-pointer bg-slate-100 py-3 px-2 rounded-full font-light lg:flex justify-center hover:bg-[#20c997] gap-6 items-center "
      >
        <span>{icon}</span>
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
