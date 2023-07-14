import React from 'react'
import revenuesIcon from "../assets/icons/vector.svg";
import transactionIcon from "../assets/icons/total-transactions-icon.svg";
import likeIcon from "../assets/icons/like.svg";
import userIcon from "../assets/icons/users.svg";
import "../styles/Cards.css"

const Cards = () => {
  return (
    <div className='cards'>
        <div className='card revenues'>
            <img src={ revenuesIcon } alt='icon' className='card--icon' />
            <h4 className='card--head'>Total Revenues</h4>
            <h2 className='card--value'>$2,129,430</h2>
        </div>
        <div className='card transaction'>
            <img src={ transactionIcon } alt='icon' className='card--icon' />
            <h4 className='card--head'>Total Transactions</h4>
            <h2 className='card--value'>1,520</h2>
        </div>
        <div className='card likes'>
            <img src={ likeIcon } alt='icon' className='card--icon' />
            <h4 className='card--head'>Total Likes</h4>
            <h2 className='card--value'>9,721</h2>
        </div>
        <div className='card users'>
            <img src={ userIcon } alt='icon' className='card--icon' />
            <h4 className='card--head'>Total Users</h4>
            <h2 className='card--value'>892</h2>
        </div>
    </div>
  )
}

export default Cards