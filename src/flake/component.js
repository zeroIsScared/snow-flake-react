import { useState } from "react";
import "./style.scss";

export const Flake = ({
  size = 0,
  color = 0,
  top = 0,
  left = 0,
  removeFlake,
}) => {
  let [_top, setTop] = useState(top);

  setTimeout(() => {
    if (_top >= 100) {
      removeFlake();
    } else {
      setTop(_top + 10);
      console.log("Update Executed!!!");
    }
  }, 500);

  const style = {
    "--size": `${size}px`,
    "--color": color,
    "--top": `${_top}%`,
    "--left": `${left}%`,
  };

  return <div style={style} className="flake"></div>;
};
