import "./Header.css";

function Searches(props) {
  return (
    <div className="searches">
      <p>
        <b>Previos Search: </b>
        {props.value}
      </p>
    </div>
  );
}

export default Searches;
