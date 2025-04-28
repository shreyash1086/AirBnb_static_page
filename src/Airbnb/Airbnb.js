import React from 'react'
import AirbnbHeader from './Airbnb-header'
import AirbnbFront from './Airbnb-front'
import AirbnbCard from './Airbnb-card'
import Card from './Carddata'

export default function Airbnb(){
    const CardData = Card.map(data => {
        return(<AirbnbCard
        {...data}
        />)
    });
    return(
        <div>
            <AirbnbHeader/>
            <AirbnbFront/>
            <section className="MainCard">
            {CardData}
            </section>
        </div>
    )
}