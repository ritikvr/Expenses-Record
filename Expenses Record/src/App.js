import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const Initial_expenses = [
  { id:'e1', title: "expense1", date: new Date(), amount: 90 },
  { id:'e2', title: "expense2", date: new Date(), amount: 80 },
  { id:'e3', title: "expense3", date: new Date(), amount: 100 },
];
function App() {
  const [expenses, setExpenses] = useState(Initial_expenses);
  function addExpenseHandler(expenseData) {
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  }
  return (
    <div>
      <h2 style={{textAlign:"center",color:"white",fontWeight:"bold"}}>Let's make the record of all expenses</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
