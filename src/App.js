  import React, { useState } from "react";
  import "./App.css";
  import { Expenses } from "./components/Expenses/Expenses";
  import NewExpense from "./components/NewExpense/NewExpense";

  const Dummy_Expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 948.12,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },

    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.54,
      date: new Date(2023, 5, 12),
    },
  ];

  function App() {
    const [enteredexpenses, setEnteredexpenses] = useState(Dummy_Expenses);

    let itemsTemps = [];

    const addExpenseHandler = (expense) => {
      
      if(itemsTemps){
        setEnteredexpenses((prevState) => {
          return [...itemsTemps, ...prevState];
        });
      }
      setEnteredexpenses((prevState) => {
        return [expense, ...prevState];
      });
      // setEnteredexpenses([expense,...enteredexpenses]);
    };

    return (
      <div className="App">
        <header className="App-header">
          <NewExpense onAddExpense={addExpenseHandler} />
          
          <Expenses data={enteredexpenses} ></Expenses>
        </header>
      </div>
    );
  }

  export default App;
