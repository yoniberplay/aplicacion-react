import "./Expenses.css";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesChart } from "./ExpensesChart"; 

export const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2023");

  const filter = (SelectedYear) => {
    setFilteredYear(SelectedYear);
     };

  const filteredExpenses = props.data.filter(e => {   
    return e.date.getFullYear().toString() === filteredYear;
  });

  // let tema = filteredYear; 

  return (
    <div className="expenses">      
      <ExpensesFilter selected={filteredYear} onChageFilter={filter} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
        {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> : filteredExpenses.map(render)} */}
      {/* {filteredExpenses.map(render)} */}
    </div>
  );
};

// function render(i) {
//   return (
//     <ExpenseItem key={i.id} title={i.title} amount={i.amount} date={i.date}></ExpenseItem>
//   );
// }

