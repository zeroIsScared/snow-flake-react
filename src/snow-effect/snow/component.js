import { useEffect, useState } from "react";
import "./style.scss";
import { Flake } from "../flake/component";
import { randColor, randInt } from "../../helpers/generators";

const Snow = ({ quantity }) => {
  let [flakes, setFlakes] = useState([
    <Flake
      key={quantity + 1}
      size={10}
      color={randColor({ redish: 0.2, greenish: 0.1, blueish: 0.78 })}
      top={0}
      left={randInt(0, 100)}
      speed={randInt(0, 1)}
    />,
  ]);

  const TOP_LIMIT = 80;

  useEffect(() => {
    setTimeout(() => {
      setFlakes(
        [
          ...flakes,
          ...new Array(quantity - flakes.length).fill().map(() => (
            <Flake
              key={TOP_LIMIT + 1}
              size={randInt(1, 30)}
              color={randColor({
                redish: 0.2,
                greenish: 0.3,
                blueish: 0.78,
              })}
              top={randInt(0, 15)}
              left={randInt(0, 100)}
              speed={randInt(0, 2)}
            />
          )),
        ]
          .filter((flake) => flake.props.top < TOP_LIMIT)
          .map((flake) => (
            <Flake
              {...flake.props}
              top={flake.props.top + flake.props.size * 0.04}
            />
          ))
      );
    }, 35);
  }, [flakes]);

  return flakes;
};

export default Snow;
