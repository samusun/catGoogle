import { useState } from "react";

function Events(props) {
  const [realValue, setValue] = useState(props.initialValue);
  function handleClick() {
    setValue(realValue + 1);
  }
  return <input value={realValue} type="button" onClick={handleClick} />;
}

export default Events;
