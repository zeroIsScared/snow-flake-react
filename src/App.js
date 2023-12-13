import { useState } from "react";
import { Flake } from "./flake/component";
import { randInt, randColor } from "./helpers/generators";

function App() {
  const [showFlake, setShowFlake] = useState(true);

  const removeFlake = () => {
    setShowFlake(false);
  };

  return (
    showFlake && (
      <Flake
        size={randInt(0, 100)}
        color={randColor()}
        top={0}
        left={randInt(20, 40)}
        removeFlake={removeFlake}
      />
    )
  );
}

export default App;
