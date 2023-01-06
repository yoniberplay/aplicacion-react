import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm";
import AddNewExpenseButton from "../Expenses/AddNewExpense";
import { uid } from "uid";

const NewExpense = (props) => {

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uid(),
    };
    props.onAddExpense(expenseData);
    Setcomponet( addbtn );
  };

  const CancelEvent = (event) => {
    Setcomponet( addbtn );
  };

  const AddEvent = (event) => {
    Setcomponet( form );
  };

  const form = (
    <ExpenseFrom
      onSaveExpenseData={SaveExpenseDataHandler}
      cancelevent={CancelEvent}
    />
  );
  
  const addbtn = <AddNewExpenseButton addnewexpense={AddEvent} />;
  const [Component, Setcomponet] = useState(addbtn);

  return (
    <div className="new-expense">
      {Component}
    </div>
  );
};

export default NewExpense;
