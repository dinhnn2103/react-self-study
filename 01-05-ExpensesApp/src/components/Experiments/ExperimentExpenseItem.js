import { useEffect, useRef, useState } from "react";
import Card from "../UI/Card";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";

function ExperimentExpenseItem(props) {

   const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value])

    return ref.current;
  }

  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  const clickHandler = () => {
    console.log("dang chuan bi update");
    setCount(count => count + 1);
    console.log("update #1");
    setCount(count => count + 1);
    console.log("update #2");
  };

  console.log("dang render");
  console.log("count = " + count);

  let isEvenCount;
  if (count % 2 === 0) {
    isEvenCount = true;
  } else {
    isEvenCount = false;
  }

  let prevIsEvenCount;
  if (prevCount % 2 === 0) {
    prevIsEvenCount = true;
  } else {
    prevIsEvenCount = false;
  }

  let clickStr = "\nNumber of click [cur: " + count + "; prev: " + prevCount + "], [curIsEvenClick = " + isEvenCount + ", prevIsEven = " + prevIsEvenCount + "]";

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>{clickStr}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExperimentExpenseItem;
