import Place from "./Place";
import { PlacesContext } from "../contexts/PlacesContext";
import { useContext } from "react";

function Places() {
    const {places, handleClick} = useContext(PlacesContext)
    //console.log(places);
    const allPlaces = places.map(
        (place, index) => {
            return (
                <Place
                key={index}
                name={place.name}
                address={place.address}
                visitedTimes={place.visitedTimes}
                isRated={place.isRated}
                onPlaceRate = {handleClick}
                />
            )
        }
    )
    return ( 
        <div className="places">
            {allPlaces}
        </div>
     );
}

export default Places;