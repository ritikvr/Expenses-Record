import React from "react";
import './NewExpense.css'
function DefaultExpenseForm(props){
    function click(){
        props.OnClick();
    }
    return <div className="defaultForm">
        <button onClick={click}>Add Expense</button>
    </div>
}
export default DefaultExpenseForm;