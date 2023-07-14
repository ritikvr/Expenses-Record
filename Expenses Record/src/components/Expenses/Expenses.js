import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseContent from "./ExpenseContent";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function yearChangeHandler(enteredYear) {
    setFilteredYear(enteredYear);
  }
  const filteredYearExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          yearChange={yearChangeHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredYearExpenses}></ExpensesChart>
        <ExpenseContent expenses={filteredYearExpenses}></ExpenseContent>
        {/* <ExpenseItem
          title={props.expenses[0].title}
          date={props.expenses[0].date}
          amount={props.expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          date={props.expenses[1].date}
          amount={props.expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          date={props.expenses[2].date}
          amount={props.expenses[2].amount}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default Expenses;
