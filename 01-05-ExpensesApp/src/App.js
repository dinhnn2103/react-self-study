import moment from "moment";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Expense 1",
      amount: 294.67,
      date: moment("2019-02-28", "YYYY-MM-DD").toDate(),
    },
    {
      id: "e2",
      title: "Expense 2",
      amount: 450,
      date: moment("2020-03-28", "YYYY-MM-DD").toDate(),
    },
    {
      id: "e3",
      title: "Expense 3",
      amount: 150.78,
      date: moment("2020-04-28", "YYYY-MM-DD").toDate(),
    },
    {
      id: "e4",
      title: "Expense 4",
      amount: 300,
      date: moment("2021-05-28", "YYYY-MM-DD").toDate(),
    },
    {
      id: "e5",
      title: "Expense 5",
      amount: 777,
      date: moment("2017-12-01", "YYYY-MM-DD").toDate(),
    },
    {
      id: "e6",
      title: "Expense 6",
      amount: 333,
      date: moment("2017-11-01", "YYYY-MM-DD").toDate(),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
  }

  const filterExpenseHandler = (items, selectYear) => {
    let filteredItems = items;
    if (selectYear !== undefined && selectYear) {
      filteredItems = items.filter(
        (item) =>
          (item.date.getFullYear()
            ? item.date.getFullYear().toString()
            : "") === selectYear
      );
    }

    return filteredItems;
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onFilterExpense={filterExpenseHandler} />
    </div>
  );
  
}

export default App;
