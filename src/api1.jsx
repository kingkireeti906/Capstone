import React from 'react'
import Styles from './api1.module.css';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import Vector3 from  './images/vector (3).svg';
import Vector4 from  './images/vector (4).svg';
import Group from  './images/Group.svg';


function api1() {
    const baseURL = "http://api.weatherapi.com/v1/current.json?key= 7755c0e8be2d4c17b34164222230612&q=india&aqi=yes";
    const [post, setPost] = useState();
 
   


    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
   
  return (
    <div>
        {post&&<div className={Styles.part3}> 
      <span id={Styles.texted}>{post.current.condition.text}</span> 
      <span id={Styles.iconed}><img src={post.current.condition.icon} alt="Weather Icon" /></span> 
      <span id={Styles.line}>|</span>
      <span id={Styles.cel}>{post.current.temp_c}°C </span>
      <span id={Styles.mbared}><img src={Vector3} alt="Weather Icon" /> </span>
      <span id={Styles.mbar}>{post.current.pressure_mb}&nbsp;mbar </span>
      <span id={Styles.pressure}>Pressure</span>
      <span id={Styles.lined}>|</span>
      <span id={Styles.wind}><img src={Vector4} alt="Wind Icon" /> </span>
      <span id={Styles.winded}>{post.current.wind_kph}<span id='km'> &nbsp;km/h</span> </span>
      <span id={Styles.win}>wind</span>
      <span id={Styles.hum}><img src={Group} alt="humidity Icon" /> </span>
      <span id={Styles.humidity}> {post.current.humidity}%</span>
      <span id={Styles.humed}>Humidiy</span>

     
     
        </div>}
    </div>
  )
}

export default api1