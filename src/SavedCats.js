import { useContext, useState } from "react";
import catContext from "./catContext";
import "./SavedCats.css";

function SavedCats() {
  const { someCat } = useContext(catContext);
  const [toggle, setToggle] = useState(false);

  function showCollection() {
    console.log(someCat);
    setToggle(!toggle);
  }
  return (
    <>
      <button id="mainBtn" onClick={showCollection}>
        {toggle ? "Hide Collection" : "Show my Collection"}
      </button>
      <div id="catList">
        {toggle
          ? someCat.map((value) => <p key={value.Id}>{value.Name}</p>)
          : null}
      </div>
    </>
  );
}
export default SavedCats;
