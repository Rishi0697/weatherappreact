import React, { useState, useEffect } from 'react'

function Validate() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");
    useEffect(() => {
       const fetchApi = async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f9fb1617ce3c14dfdff846cb52e13fc3`;
        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);
        setCity(responseJson.main);
       }
       fetchApi();
    }, [search])
    return (
        <div style={{width:'100%', height:"100vh",backgroundColor:'#ABB8C3'}}>
            <div className="container text-center">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-10 mx-auto">
                    <input type="search" className='my-5' onChange={(e)=>{setSearch(e.target.value)}} style={{borderRadius:"5px"}}/>
                    {
                        !city ? (<p>Data Not Found</p>): 
                    (<div>
                    <h2 className='text-success'>{search}</h2>
                    <h3>Current Temp : {city.temp}℃el</h3>
                    <p>max-temp : {city.temp_max}℃el</p>
                    <p>min-temp: {city.temp_min}℃el</p>
                    </div>)
}
<button className="my-2 mx-4" id ="btn"><a href="/logout">Logout</a></button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Validate
