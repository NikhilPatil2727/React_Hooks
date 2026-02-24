import React from "react";
import { memo } from "react";
const Child = React.memo(({ handleClick }) => {
  console.log("child is rerenderd");
  return (
    <div>
      <button onClick={() => handleClick()}>child</button>
    </div>
  );
});

export default Child;
