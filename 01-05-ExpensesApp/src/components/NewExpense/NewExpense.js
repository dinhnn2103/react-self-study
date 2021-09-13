import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import * as uuid from "uuid";
import { useState } from "react";

function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid.v4()
    }
    props.onAddExpense(expenseData);
    stopEditingHandler();
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
}

export default NewExpense;
