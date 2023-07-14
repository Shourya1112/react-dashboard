import React from 'react'
import dashboardIcon from "../assets/icons/dashboard-icon.svg"
import transactionIcon from "../assets/icons/transaction-icon.svg"
import scheduleIcon from "../assets/icons/schedule-icon.svg"
import userIcon from "../assets/icons/user-icon.svg"
import settingIcon from "../assets/icons/setting-icon.svg"
import "../styles/Nav.css";

const Nav = () => {
   return (
    <div className='nav'>
        <div className='nav--uti'>
            <h1 className='heading'>Board.</h1>
            <div className='nav--btn'>
                <img alt='icon' src={ dashboardIcon } className='nav--btn--icon'/>
                <h3 className='nav--btn--text'>Dashboard</h3>
            </div>
            <div className='nav--btn'>
                <img alt='icon' src={ transactionIcon } className='nav--btn--icon'/>
                <h3 className='nav--btn--text'>Transactions</h3>
            </div>
            <div className='nav--btn'>
                <img alt='icon' src={ scheduleIcon } className='nav--btn--icon'/>
                <h3 className='nav--btn--text'>Schedules</h3>
            </div>
            <div className='nav--btn'>
                <img alt='icon' src={ userIcon } className='nav--btn--icon'/>
                <h3 className='nav--btn--text'>Users</h3>
            </div>
            <div className='nav--btn'>
                <img alt='icon' src={ settingIcon } className='nav--btn--icon'/>
                <h3 className='nav--btn--text'>Settings</h3>
            </div>
        </div>
        <div className='nav--sup'>
            <h4 className='nav--btn--help'>Help</h4>
            <h4 className='nav--btn--contact'>Contact Us</h4>
        </div>
    </div>
  )
}

export default Nav