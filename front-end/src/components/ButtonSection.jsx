import React from "react";
import { FaCopy } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import CustomButton from "./CustomButton";
function ButtonSection({ onChange, onDelete, onRefresh, onCopy }) {
  const btns = [
    {
      icon: <FaCopy />,
      text: "Copy",
      onclick: onCopy,
    },
    {
      icon: <IoIosRefresh />,
      text: "Refresh",
      onclick: onRefresh,
    },
    {
      icon: <RiEdit2Fill />,
      text: "Change",
      onclick: onChange,
    },
    {
      icon: <ImCross />,
      text: "Delete",
      onclick: onDelete,
    },
  ];
  return (
    <div className="w-full h-24 gap-8 shadow-md flex justify-center items-center">
      {btns.map((item, index) => (
        <CustomButton
          onClick={item.onclick}
          key={index}
          text={item.text}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default ButtonSection;
