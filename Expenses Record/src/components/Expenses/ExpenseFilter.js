import React from "react";
import './ExpenseFilter.css';
function ExpenseFilter(props) {
    function yearChangeHandler(event){
        props.yearChange(event.target.value)
    }
  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={yearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
