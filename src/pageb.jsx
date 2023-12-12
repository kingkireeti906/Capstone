import React, { useState, useEffect } from 'react';
import styles from './Pageb.module.css';
import Image15 from './images/image 15.png';
import Api1 from './api1';
import Api2 from './api2';
import Api3 from './api3';
import { useNavigate } from 'react-router-dom';
// import Movies from './Movies';
import Counter from './CountdownTimer'


function Pageb() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate=useNavigate();
  const browse = ()=>{
    navigate('/Movies');
   }


  useEffect(() => {
    // Update current time every second
    const timerId = setInterval(() => {
      const newTime = new Date();
      setCurrentTime(newTime);
      const minutes = newTime.getMinutes();
      if (minutes === 0) {
        // Trigger any action you want when the minute changes
        console.log('Minute changed!');
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  const date = new Date();

  // Get date
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  // Get time
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Determine AM or PM
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  const Time = `${formattedHours}:${minutes} ${amOrPm}`;

  console.log(currentDate);
  console.log(Time);

  const storedUser = localStorage.getItem('user_data');
  const storeddata = JSON.parse(storedUser);
  const store_categories = localStorage.getItem('categories');
  const categories = JSON.parse(store_categories);
  const result = categories.map((item, index) => (
    <div key={index} className={styles.individualItem}>
      {item}
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.part1}>
        <div className={styles.image}>
          <img src={Image15} alt="leftimage" />
        </div>
        <div className={styles.userdetails}>
          <div id={styles.name}> {storeddata.name}</div>
          <div id={styles.email}> {storeddata.email}</div>
          <div id={styles.username}> {storeddata.username}</div>
        </div>
        <div className={styles.categories}>{result}</div>
      </div>
      <div className={styles.notes}>
        <span id={styles.note}> All notes</span>
        <textarea id={styles.w3review}>
          This is how I am going to learn MERN Stack in the next 3 months.
        </textarea>
      </div>
      <div className={styles.part2}>
        &nbsp; &nbsp; &nbsp;&nbsp;{currentDate} &nbsp; {Time}
      </div>
      <Api1 />
      <Api2 />
      <Api3 />
      <Counter/>
      <button className={styles.browse} onClick={browse}> Browse</button>
    </div>
  );
}

export default Pageb;
