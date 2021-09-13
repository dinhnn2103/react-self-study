import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

function ExpensesList(props) {

  if ("items" in props && props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

  return  (
  <ul className="expenses-list">
    {props.items.map((e) => (
      <ExpenseItem
        key={e.id}
        title={e.title}
        amount={e.amount}
        date={e.date}
      ></ExpenseItem>
    ))}
  </ul>
  );

}

export default ExpensesList;