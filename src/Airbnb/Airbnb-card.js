import React from 'react'

export default function AirbnbCard(props){
    let badgeText
    if(props.badge === 0){
        badgeText='SOLD OUT'
    }else if(props.location === "online"){
        badgeText ='ONLINE'
    }
    return(
        <div className='card'>
                {
                    badgeText && <div className='card_badge'>{badgeText}</div>
                }
                <img
                    src={require(`../Airbnb_images/${props.img}`)} 
                    alt='Shreyash' className='card_img'
                />
                <div className='card_stats'>
                    <img 
                        src={require('../Airbnb_images/Star 1.png') } 
                        alt='Shreyash' className='card_star'
                    />
                    <span>{props.rating}   </span>
                    <span className='gray'> ({props.num}) .</span>
                    <span className='gray'>{props.country}</span>
                </div>
                <p className='card_title'>{props.title}</p>
                <p className='card_price'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
};