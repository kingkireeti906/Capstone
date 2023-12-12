import React, { useState } from 'react';
import Image2 from './images/image 2.png';
import Image3 from './images/image 3.png';
import Image4 from './images/image 4.png';
import Image6 from './images/image 6.png';
import Image7 from './images/image 7.png';
import Image8 from './images/image 8.png';
import Image9 from './images/image 9.png';
import Image10 from './images/image 10.png';
import Image11 from './images/image 11.png';
import Danger from './images/vector (2).svg';
import styles from './Pagea.module.css';
import { useNavigate } from "react-router-dom";


function Pagea() {
  const [active, inactive] = useState(false);
  const [active1, inactive1] = useState(false);
  const [active2, inactive2] = useState(false);
  const [active3, inactive3] = useState(false);
  const [active4, inactive4] = useState(false);
  const [active5, inactive5] = useState(false);
  const [active6, inactive6] = useState(false);
  const [active7, inactive7] = useState(false);
  const [active8, inactive8] = useState(false);
  const navigate = useNavigate();
 
  
  const [selectedTexts, setSelectedTexts] = useState([]);
  const update = (inactiveFunction, text) => {
    const isTextSelected = selectedTexts.includes(text);
  
    if (isTextSelected) {
      // If the text is already selected, remove it
      const updatedTexts = selectedTexts.filter((selectedText) => selectedText !== text);
      setSelectedTexts(updatedTexts);
      inactiveFunction(false); // Set the state to inactive
      
      
     
      
    } else {
      // If the text is not selected, add it
      inactiveFunction(true); // Set the state to active
      setSelectedTexts((prevSelectedTexts) => [...prevSelectedTexts, text]);
    }
  };
  const removeText = (text) => {
    // Remove the text from the selectedTexts state
    const updatedTexts = selectedTexts.filter((selectedText) => selectedText !== text);
    setSelectedTexts(updatedTexts);
  };
  const nextpage = () => {
    if (selectedTexts.length >= 3) {
      navigate('/Pageb');
      localStorage.setItem('categories', JSON.stringify(selectedTexts));


    } else {
      // Handle the case when selectedTexts.length is less than 3 if needed
      console.log('Minimum 3 categories required before navigating to Page3');
    }
  };
  
    

   
  return (
    <div className='secondpage'>
      <div>
        
 
      </div>
      <div className='leftpart'>
        <span id='super'>Super app</span>
        <span id='category'>Choose your entertainment category</span>
        {selectedTexts.map((text, index) => (
          <button key={index} className='hovering spaced-button'>
            {text}&nbsp;&nbsp;&nbsp;<span id='x'onClick={() => removeText(text)}>x</span>
          </button>
        ))}
         {selectedTexts.length < 3 && (<div className='danger'>  <img src={Danger}  alt="leftimage" /> Minimum 3 category required</div>

         )}
      </div>
      <div className='rightpart'>
        <div className="gridcontainer">
          <div
            className={`griditem1 ${active ? 'active' : ''}`}
            onClick={() => update(inactive, ' Action')}
            style={active ? { border: '6px solid #11B800', borderRadius: '20px' } : {}}
          >
            Action<span id='image2'> <img src={Image2} alt="leftimage" /> </span>
          </div>
          <div
            className={`griditem2 ${active1 ? 'active' : ''}`}
            onClick={() => update(inactive1,' Drama')}
            style={active1 ? { border: '6px solid #11B800', borderRadius: '20px' } : {}}
          >
            Drama <span id='image2'> <img src={Image3} alt="leftimage" /></span>
          </div>

          <div
            className={`griditem3 ${active2 ? 'active' : ''}`}
            onClick={() => update(inactive2,'Romance')}
            style={active2 ? { border: '6px solid #11B800', borderRadius: '20px' } : {}}
          >
            Romance<span id='image2'> <img src={Image4} alt="leftimage" /></span>
          </div>
          <div
            className={`griditem4 ${active3 ? 'active' : ''}`}
            onClick={() => update(inactive3,'thriller')}
            style={active3 ? { border: '6px solid #11B800', borderRadius: '20px' } : {}}
          >
            Thriller<span id='image2'> <img src={Image6} alt="leftimage" /></span>
          </div>
          <div
            className={`griditem5 ${active4 ? 'active' : ''}`}
            onClick={() => update(inactive4,'Western')}
            style={active4 ? { border: '6px solid #11B800', borderRadius: '20px' } : {}}
          >
            Western<span id='image2'> <img src={Image7} alt="leftimage" /></span>
          </div>
          <div
            className={`griditem6 ${active5 ? 'active' : ''}`}
            onClick={() => update(inactive5,'hrror')}
            style={active5 ? { border: '6px solid #11B800', borderRadius: '20px' } : {}}
          >
            Horror<span id='image2'> <img src={Image8} alt="leftimage" /></span>
          </div>
          <div
            className={`griditem7 ${active6 ? 'active' : ''}`}
            onClick={() => update(inactive6,'fantasy')}
            style={active6 ? { border: '6px solid #11B800', borderRadius: '20px' } : {}}
          >
            Fantasy<span id='image2'> <img src={Image9} alt="leftimage" /></span>
          </div>
          <div
            className={`griditem8 ${active7 ? 'active' : ''}`}
            onClick={() => update(inactive7,'music')}
            style={active7 ? { border: '6px solid #11B800', borderRadius: '20px' } : {}}
          >
            Music<span id='image2'> <img src={Image10} alt="leftimage" /></span>
          </div>
          <div
            className={`griditem9 ${active8 ? 'active' : ''}`}
            onClick={() => update(inactive8,'fiction')}
            style={active8 ? { border: '6px solid #11B800', borderRadius: '20px' } : {}}
          >
            Fiction<span id='image2'> <img src={Image11} alt="leftimage" /></span>
           
          </div>
          <button id={styles.nextpage} onClick={nextpage}> Next Page</button>

        </div>
      </div>
    </div>
  );
}

export default Pagea;
