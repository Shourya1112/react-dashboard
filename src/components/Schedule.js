import React from 'react'
import "../styles/Schedule.css"

const Schedule = () => {
  return (
    <div className='card-sch'>
        <div className='card-sch head'>
            <h2 className='heading'>Today's schedule</h2>
            <h4 className='side'>See All</h4>
        </div>
        <div className='task'>
            <h1 className='tasks'>No Meetings<br/>Scheduled</h1>
        </div>
    </div>
  )
}

export default Schedule;