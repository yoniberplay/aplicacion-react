import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredmonto, setEnteredmonto] = useState("");
  const [enteredfecha, setEnteredfecha] = useState("");

  // const [userInput,setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titulo = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,

    // })
  };

  const monto = (event) => {
    setEnteredmonto(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    // setUserInput(( prevState ) => {
    //   return {...prevState,enteredAmount: event.target.value};
    // });
  };

  const fecha = (event) => {
    setEnteredfecha(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  };

  const handsubmit = (event) => {
    event.preventDefault();

    if (!enteredTitle || !enteredmonto) return;

    const expenseData = {
      title: enteredTitle,
      amount: +enteredmonto,
      date: new Date(enteredfecha),
    };

    console.log("ExpenseForm.js");
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredfecha("");
    setEnteredmonto("");
  };

  const handcancel = (event) => {
    props.cancelevent(event);
  };

  return (
    <form onSubmit={handsubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titulo} />
        </div>

        <div className="new-expense__control">
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              value={enteredmonto}
              onChange={monto}
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
        </div>
        <div className="new-expense__control">
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={enteredfecha}
              onChange={fecha}
              type="date"
              min="2020-01-01"
              max="2023-01-28"
            />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={handcancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
