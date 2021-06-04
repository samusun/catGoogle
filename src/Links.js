import "./Links.css";
let Link = "https://goodmorningkitten.com/";

function Links() {
  let list = [
    "Discord",
    "GitHub",
    "Inbox",
    "Facebook",
    "Boozt",
    "React",
    "Bing",
    "Xbox",
    "Tradera",
    "Youtube",
  ];

  let render = list.map((value, index) => (
    <a key={index} className="oneBox" href={Link}>
      <div>
        <h4 className="linkHead">{value.substring(0, 1)}</h4>
        <p>{value}</p>
      </div>
    </a>
  ));
  return <div className="boxes">{render}</div>;
}

export default Links;
