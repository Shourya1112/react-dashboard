import { React , useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import Cards from './Cards';
import Graph from './Graph';
import PieChart from './PieChart';
import Schedule from './Schedule';
import { LineData , PieData } from './Data'
import "../styles/Home.css";

const Home = () => {
    const [ pieData, setPieData ] = useState({
        labels: PieData.map((data) => data.product),
        datasets: [
            {
                label: "sales",
                data:  PieData.map((data) => data.sales),
                backgroundColor: [ "#98D89E" , "#F6DC7D", "#EE8484" ]
            }
        ]
    })
    const [ lineData, setLineData ] = useState({
        labels: LineData.map((data) => data.week),
        datasets: [
            {
                label: "User",
                data:  LineData.map((data) => data.user),
                backgroundColor: "#98D89E",
                borderColor: "#98D89E",
                tension: 0.4,
            },
            {
                label: "Guest",
                data:  LineData.map((data) => data.guest),
                backgroundColor: "#E9A0A0",
                borderColor: "#e9a0a0",
                tension: 0.4,
            }
        ]
    })

  return (
    <div className='home'>
        <div className='sidebar'>
            <Nav />
        </div>
        <div className='content'>
            <Header />
            <Cards />
            <Graph chartData={lineData}/>
            <div className='footer'>
                <PieChart chartData={pieData}/>
                <Schedule />
            </div>
        </div>
    </div>
  )
}

export default Home;