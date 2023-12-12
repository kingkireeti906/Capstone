import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './api2.module.css';
import { useNavigate } from 'react-router-dom';


function Api2() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate=useNavigate();
  const [posts, setPosts] = useState();
  const [counter, setCounter] = useState(0);
  const [newIndex, setNewIndex] = useState(0);
  
  useEffect(() => {
    // Logic to execute when newIndex changes
    console.log('newIndex changed:', newIndex);
  }, [newIndex]);

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Update data every minute
    const intervalId = setInterval(() => {
      setNewIndex((prevIndex) => prevIndex + 1);
    }, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Logic to execute when newIndex changes
    console.log('newIndex changed:', newIndex);
    // Log the current time only when the minute changes
    const currentMinute = currentTime.getMinutes();
    const timeoutDuration = (60 - currentMinute) * 60000; // Time until next minute
    const timeoutId = setTimeout(() => {
      console.log('Current time:', new Date());
      setNewIndex((prevIndex) => prevIndex + 1);
    }, timeoutDuration);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [newIndex, currentTime]);

  const fetchData = () => {
    axios
      .get('https://newsapi.org/v2/everything?q=apple&from=2023-12-09&to=2023-12-09&sortBy=popularity&apiKey=9eaa5eb9fd6f463fa2e18280defb0e34')
      .then((response) => {
        console.log(response.data); // Log the response
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    // Calculate the article index based on the counter
    if (posts) {
      const newIndexValue = newIndex % posts.articles.length;
      setCounter(newIndexValue);
    }
  }, [counter, posts, newIndex]);

  useEffect(() => {
    // Update current time every second
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      {posts && (
        <div className={Styles.newsimage}>
          <img
            src={posts.articles[counter].urlToImage}
            alt="Article"
            style={{ height: '470px', width: '500px', objectFit: 'cover', borderRadius: '19px 19px 0px 0px' }}
          />

          <div className={Styles.back}>
            <div className={Styles.mobile}>{posts.articles[counter].title}</div>
            <span id={Styles.update}>
              {formatDate(currentTime)} |&nbsp;{formatTime(currentTime)}
            </span>
          </div>
          <div className={Styles.info}>
            <div className={Styles.infotext}>{posts.articles[counter].content}</div>
            
          </div>
         



        </div>
      )}
    </>
  );
}

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const formatTime = (date) => {
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes} ${amOrPm}`;
};

export default Api2;
