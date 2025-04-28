import React from 'react'
import img from '../Airbnb_images/Group 77.png'

export default function AirbnbFront(){
    return(
        <section className='front'>
                <img src={img} alt='Shreyash' className='front_img'/>
            <h1 className='front_header'>Online Experiences</h1>
            <p className='front_text'>
            Join unique interactive activities led by one-of-kind hosts-all without leaving home.
            </p>
        </section>
    )
}