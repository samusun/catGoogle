import "./Header.css";
import { useEffect, useState, useContext } from "react";
import catContext from "./catContext";
import Searches from "./Searches";
import logo from "./pics/logo.svg";

let results = null;
let oneCat = null;
let thisSearch = "";
let catNames = [];
let searches = null;
let catId = null;

function Header() {
  const { someCat, setSomeCat } = useContext(catContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadCatList() {
      await fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: {
          "x-api-key": "api_key=edeee3b2-310f-42c4-a65f-06368395ad4d",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          getNames(result);
        });
    }
    loadCatList();
  });
  function getNames(data) {
    catNames = [];
    for (let i = 1; i < data.length; i++) {
      catNames.push({ Name: data[i].name, Id: data[i].id });
    }
  }

  if (search.length > 0) {
    let filtered = catNames.filter((data) => data.Name.includes(search));
    results = filtered.map((value, index) => (
      <p className="searches" onClick={linkClick} id={value.Id} key={index}>
        {value.Name}
      </p>
    ));
  } else {
    results = <></>;
  }

  function linkClick(e) {
    searches = thisSearch; // För att spara tidigare sökningar till användaren
    thisSearch = e.target.innerHTML;
    catId = e.target.id;

    fetch(
      `https://api.thecatapi.com/v1/images/search?breed_id=${e.target.id}`,
      {
        headers: {
          "x-api-key": "api_key=edeee3b2-310f-42c4-a65f-06368395ad4d",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        renderCat(result);
      });
  }

  function renderCat(data) {
    console.log(data);
    let cat = data[0].breeds[0];
    oneCat = (
      <div className="infoBox">
        <div className="col1">
          <h2>{cat.name}</h2>
          <h4>{cat.description}</h4>
          <button id="myBtn" onClick={saveCat}>
            Save to collection
          </button>
        </div>
        <div className="col2">
          <img id="catImage" src={data[0].url} alt="Cat"></img>
          <p>Temperament: {cat.temperament}</p>
          <a href={cat.wikipedia_url}>Read more on Wikipedia</a>
        </div>
      </div>
    );
    setSearch("");
  }

  function saveCat() {
    console.log(thisSearch, catId);
    let newArr = someCat;
    newArr.push({ Name: thisSearch, Id: catId });
    setSomeCat(newArr);
  }

  return (
    <div className="myHeader">
      <img src={logo} alt="Logo" />
      <input
        onChange={(event) => setSearch(event.target.value)}
        id="searchField"
        type="textField"
        autoComplete="off"
        value={search}
      />
      <div className="matches">{results || null}</div>
      {searches && <Searches value={searches} />}
      <div className="oneCat">{oneCat || null}</div>
    </div>
  );
}

export default Header;
