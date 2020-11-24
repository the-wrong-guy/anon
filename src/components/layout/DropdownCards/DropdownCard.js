import React from 'react'
import './DropdownCard.css'

export default function DropdownCard(props) {
    return (
        <div className="courses-card">
        <p>{props.title}</p>
        <img src={props.image} alt="courseImages" />
        <div style={{display:"flex",justifyContent:"space-between"}}><span>{props.plan}</span><span>{props.price}</span></div>
        </div>
    )
}
