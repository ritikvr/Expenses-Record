import React from "react";
import "./ExpenseItem.css";

function ExpenseItemDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="date">
      <div className="date_month">{month}</div>
      <div className="date_year">{year}</div>
      <div className="date_day">{day}</div>
    </div>
  );
}
export default ExpenseItemDate;
