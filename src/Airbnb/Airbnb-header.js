import React from 'react'
import bnb from '../Airbnb_images/Vector.png'

export default function AirbnbHeader(){
    return(
        <div className='Head'>
            <img src={bnb} alt='Shreyash' className='Airbnb_logo'/>
        </div>
    )
}