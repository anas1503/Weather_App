import React from 'react'

const Location = (props) => {

    const setDate = () => {

        let d = new Date();

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sataurday"];


        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();


        return `${day} ${date} ${month} ${year}`;
    }


    return (

        <div className="location-box">
            <p className="location">{props.city}</p>
            <p className="time">{setDate()}</p>
        </div>

    )
}


export default Location;