import React from 'react';
import { Pie } from "react-chartjs-2";
import { chart as chartJS } from "chart.js/auto";
import "../styles/Piechart.css"

const PieChart = (props) => {
    const data = props.chartData;
    console.log(data)

    const config= {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 12,
          useBorderRadius: true,
          borderRadius: 5,
          padding: 30,
           color: "#000",
          font: {
            size: 15,
            weight: 700,
          }

        }
      }
    }
    }

  return (
    <div className='piechart'>
        <h2 className='heading'>Top Products</h2>
        <div className='chart'>
            <Pie data={data} options={config} width={400} height={300}/>
        </div>
    </div>
  )
}

export default PieChart