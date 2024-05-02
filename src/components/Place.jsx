import { Link } from "react-router-dom";
import { useState } from "react";

function Place({name, address, visitedTimes, isRated, onPlaceRate}) {
    const [rateStatus, setRateStatus] = useState(isRated);
    
    return ( 
        <div className="single-place">
            <p>{name}</p>
            <p>{address}</p>
            <div className="place-details">
                <span className="visited-times">{visitedTimes}</span>
                <span className="rating-button">
                    <button onClick={() => {
                        setRateStatus(!rateStatus)
                    }}>Rate</button>
                </span>
                <span className="rating-color" style={
                    rateStatus  ? { backgroundColor : "green"}:
                    { backgroundColor : "red"}
                }></span>
                <span><Link to={`/${address}`}> Same address </Link></span>
            </div>
        </div>
     );
}

export default Place;