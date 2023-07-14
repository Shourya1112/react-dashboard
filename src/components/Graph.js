import React from 'react';
import redDot from "../assets/icons/ellipse-3.svg";
import greenDot from "../assets/icons/ellipse-4.svg";
import { Line } from "react-chartjs-2";
import { chart as chartJS } from "chart.js/auto";
import "../styles/Graph.css"

const Graph = (props) => {
  const data = props.chartData;
  console.log(data)

  const config = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false
        }
      }
    },
    elements: {
      point: {
        pointStyle: false
      },
      line: {
        borderWidth: 2
      }
    },
    plugins: {
      legend: {
        position: "right",
        align: 'start',
        labels: {
          boxWidth: 12,
          useBorderRadius: true,
          borderRadius: 5,
        }
      }
    }
}


  return (
    <div className='graphCard'>
        <div className='graphHeader'>
                <h2 className='heading'>Activites</h2>
                <h4 className='period'>May - June 2021</h4>
        </div>
        <div className='graph'>
          <Line data={data} options={config} width="600px" />
        </div>
    </div>
  )
}

export default Graph;

// <div className='indicator'>
//                 <h4 className='text'><img src={ redDot } className='icon'/>Guest</h4>
//                 <h4 className='text'><img src={ greenDot } className='icon'/>User</h4>
//             </div>