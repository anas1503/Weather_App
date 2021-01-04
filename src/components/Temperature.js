import React, { useState, useEffect } from 'react'

const Temperature = (props) => {
    const [weather, setweather] = useState(" ");
    const [weatherstatus, setweatherstatus] = useState(" ");

    useEffect(  () => {


        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${props.search}&units=metric&appid=e70774c66a2ebe1ed1d4965ad62b0997`;
            const response = await fetch(url);
            const resjson = await response.json();
    
            setweather(resjson.main);
            setweatherstatus(resjson.weather);
            

        }

        fetchApi();

    }, [props.search])

    const weathercondition = weatherstatus ? (

        <p style={{textTransform:"capitalize"}}><span style={{ color: 'whitesmoke', fontWeight: 'bold' }}>DESCRIPTION :</span> {weatherstatus[0].description}</p>
    ) : (
            " "
        );




    return (
        <>

            {!weather ? (
                <p className="error">NO DATA FOUND!!</p>
            ) : (
                    <>
                        <div className="temp">
                            <p>{weather.temp}°C</p>
                        </div>

                        <div className="temp-status">
                            <p><span style={{ color: 'whitesmoke', fontWeight: '900' }}>MAX_TEMP :</span> {weather.temp_max}°C</p><br />
                            <p><span style={{ color: 'whitesmoke', fontWeight: '900' }}>MIN_TEMP :</span> {weather.temp_min}°C</p><br />

                            {weathercondition}

                            <br />
                            <p><span style={{ color: 'whitesmoke', fontWeight: '900' }}>PRESSURE :</span> {weather.humidity} %</p><br />
                            <p><span style={{ color: 'whitesmoke', fontWeight: '900' }}>HUMIDITY :</span> {weather.pressure} hPa</p><br />

                        </div>
                    </>)
            }

        </>
    )
}

export default Temperature
