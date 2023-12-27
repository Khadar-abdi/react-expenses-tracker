import { useState } from "react";
import { FaPlus } from "react-icons/fa";
// context
function Add(props) {
  const [amount, setAmount]= useState(0)
  const [Desc, setDesc]= useState(0)
  return (
    <div className="add-expense space">
      <input className="expense-amount" type="number" placeholder="$"     onChange={(e)=> setAmount(e.target.value)} />
      <input
        className="expense-input"
        type="text"
        placeholder="Add expense description"
        onChange={(e)=> setDesc(e.target.value)}
      />
      <button className="expense-button" onClick={()=> props.handleClick(amount, Desc)}>
        <FaPlus />
      </button>
    </div>
  );
}

export default Add;
