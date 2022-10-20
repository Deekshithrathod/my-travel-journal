import React from 'react'

import TravelCard from './components/TravelCard'
import Navbar from './components/Navbar'

import data from './data'

export default function App(){
    const travelCards = data.map((item,index) =>  {
        return <TravelCard key={index} item={item}/>
    })
    return(
        <div>
            <Navbar />
            {travelCards}
        </div>
    )
}