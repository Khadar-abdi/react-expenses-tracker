import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {

  const [ balance, setBalance]= useState(100)
  const [ expenses, setExapenses]= useState([
  {id:1, amount:30, description:"gym"},
  {id:2, amount:30, description:"food"},
  {id:3, amount:6630, description:"car"}
  ])


  function addNewExpense(amount, desc){

   let newId 

   if(expenses.length>0){
    newId=expenses[expenses.length-1].id+1
   } else {
    newId=1
   }
 let newData=expenses.concat({id: newId, amount:amount, description:desc})
 setExapenses(newData)
 
 setBalance(balance+ Number(amount))

  
  }

  function  removeItem(id){
    console.log(id);
   let removed=expenses.filter((word) => word.id = id )
   removed.pop()

   console.log(removed);
  setExapenses(removed)

  }


  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance total={balance} />
          <Add handleClick={addNewExpense} />
          {expenses.map((items)=>     <Expenses data={items} removeData={removeItem} /> )}
      
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
