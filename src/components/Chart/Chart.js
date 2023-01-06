import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

export const Chart = (props) => {

    const dataPointsValues = props.dataPoints.map(i => i.value);
    const totalMaximun = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}   //? Como la etiqueta sera diferente para cada elemento la usare como id tambien.
          value={dataPoints.value}
          maxValue={totalMaximun}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};
