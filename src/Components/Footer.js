import React from "react";

let Footer=(props)=>{
    return(
        <div className="footer">
            <img src={`./${props.img}`} alt="katie" className="katie"/>
            <div className="stats">
        <img src="./star.png" alt="star" className="star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
            </div>
            <div className="katie-text">
            <p className="footer-title">{props.title}</p>
            <p className="footer-price"><span className="bold">From ${props.price}</span> / person</p></div>
        </div>
        
    )
}

export default Footer;