//import React, { useState } from "react";
import "./ExpenseList.css";
import { ExpenseItem } from "./Expenseltem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return <ul className="expenses-list">{props.items.map(render)}</ul>;
};

function render(i) {
  return (
    <ExpenseItem
      key={i.id}
      title={i.title}
      amount={i.amount}
      date={i.date}
    ></ExpenseItem>
  );
}

export default ExpenseList;
