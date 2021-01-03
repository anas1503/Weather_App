import React, { useState } from 'react'
import Location from './Location'
import Temperature from './Temperature'

const Search = () => {
    const [city, setcity] = useState(' ');
    const [cityname, setcityname] = useState(' ');


    

    const clickhandler = () => {
        setcityname(city);
        
    }

    const eventhandler = (e) => {
        setcity(e.target.value);
    }


    



    return (
        <>
            <input type="text" placeholder=" Enter location..." className="search-bar" onChange={eventhandler}   />
            <button onClick={clickhandler} className="search" >search</button>
            <Location city={cityname} />

            <Temperature search={cityname} />

        </>
    )
}


export default Search;