import React, { useState } from "react";
import "./NewExpense.css";
import DefaultExpenseForm from "./DefaultExpenseForm";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [form, setForm] = useState(false);

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setForm(false);
  }

  function CancelHandler() {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setForm(false);
  }

  function click() {
    setForm(true);
  }

  if (form === false) {
    return <DefaultExpenseForm OnClick={click}></DefaultExpenseForm>;
  } else {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__element">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__element">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__element">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2020-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__action">
          <button onClick={CancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}
export default ExpenseForm;
