import { useEffect, useState } from "react";
import "./style.scss";
import { Flake } from "../flake/component";
import { randColor, randInt } from "../../helpers/generators";

const Snow = ({ quantity }) => {
  const genereateFlakes = (quantity) => {
    let flakes = [];

    while (flakes.length < quantity) {
      flakes.push(
        <Flake
          key={flakes.length}
          size={10}
          color={randColor()}
          top={0}
          left={randInt(0, 100)}
        />
      );
    }
    return flakes;
  };

  let [flakes, setFlakes] = useState(genereateFlakes(quantity));

  const TOP_LIMIT = 80;

  useEffect(() => {
    setTimeout(() => {
      setFlakes(
        flakes
          .filter((flake) => flake.props.top < TOP_LIMIT)
          .map((flake) => <Flake {...flake.props} top={flake.props.top + 5} />)
      );
    }, 500);
  }, [setFlakes, flakes]);

  return flakes;
};

export default Snow;
