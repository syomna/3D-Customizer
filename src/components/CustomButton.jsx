import React from "react";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helper";
import state from "../store";

const CustomButton = ({ title, filled, customStyles, handleOnClick }) => {
  const snap = useSnapshot(state);

  const buttonStyle = filled
    ? {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      }
    : {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={buttonStyle}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
