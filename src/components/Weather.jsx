import React, { useState, useEffect } from "react";
import "../components/css/style.css";

const Weather = () => {
  const [city, setcity] = useState();
  const [search, setsearch] = useState("Nagpur");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a384d79b7a5e98f1447f3097b8b26498`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setcity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}</h1>
              <h3 className="tempmin_max">
                Minn : {city.temp_min}ºCel | Max : {city.temp_max}ºCel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Weather;
