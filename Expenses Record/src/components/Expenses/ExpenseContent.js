import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseContent(props) {
  if (props.expenses.length === 0) {
    return (
      <p style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
        No expenses found
      </p>
    );
  } else {
    return props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }
}
export default ExpenseContent;
