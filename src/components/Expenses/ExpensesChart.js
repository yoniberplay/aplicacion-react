import React from "react";
import { Chart } from "../Chart/Chart";

export const ExpensesChart = ( props ) => {
   

    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Api', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Agu', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (const i of props.expenses) {
         const expenseMonth = i.date.getMonth();
         chartDataPoints[expenseMonth].value += i.amount; 
    }
    return (

        <Chart dataPoints={chartDataPoints}/>
    )
};