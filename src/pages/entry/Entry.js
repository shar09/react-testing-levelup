import React, { useState, Fragment } from "react";
import Options from "./Options";

function Entry() {
  const [options] = useState(["scoops", "toppings"]);

  return (
    <Fragment>
      {options.map((option, index) => (
        <Options key={index} optionType={option} />
      ))}
    </Fragment>
  );
}

export default Entry;
