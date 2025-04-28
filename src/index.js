import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import reportWebVitals from './reportWebVitals'
import Airbnb from "./Airbnb/Airbnb"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Airbnb/>
    </>
)

reportWebVitals();