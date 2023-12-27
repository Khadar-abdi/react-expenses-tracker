import { FaBackspace } from "react-icons/fa";

function Expenses(props) {
  return (
    <div className="expense">
      <div>💲{props.data.amount}</div>
      <div>{props.data.description}</div>
      <div>
        <FaBackspace className="remove" onClick={()=> props.removeData(props.data.id)} size={30} color={"red"} />
      </div>
    </div>
  );
}

export default Expenses;
