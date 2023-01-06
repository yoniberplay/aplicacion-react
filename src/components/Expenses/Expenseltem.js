import "./Expenseltem.css";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import React from 'react';


export const ExpenseItem = ( props ) => {
  
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price" >${props.amount}</div>
        {/* <button onClick={() => { updateTitle(""); }}>Pulsame</button> */}
      </div>
    </Card>
    </li>
  );
};
