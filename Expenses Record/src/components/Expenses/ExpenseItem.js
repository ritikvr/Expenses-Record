import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from '../UI/Card';

function ExpenseItem(props) {
  return (
    <Card className="Item">
      <ExpenseItemDate date={props.date}></ExpenseItemDate>
      <div className="Item_discription">
        <h2>{props.title}</h2>
        <div className="Item_price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
