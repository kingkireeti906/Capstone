import React, { useState } from 'react';
import Leftimage from './images/image 13.png';
import './Homepage.css'; // Import the CSS file where you define your styles
import { useFormik } from 'formik';
import Pagea from './Pagea';
import { useNavigate } from "react-router-dom";
import Pageb from './pageb'; 



const Homepage = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
 

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      mobile: '',
      checkbox: '',
    },
    onSubmit: (values) => {
      console.log('form submit', values);
      setSubmitted(true);
      navigate('/Page');
      localStorage.setItem('user_data', JSON.stringify(values));
     
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = 'Field is required';
      }
      if (!values.email) {
        errors.email = 'Field is required';
      }
      if (!values.username) {
        errors.username = 'Field is required';
      }
      if (!values.mobile) {
        errors.mobile = 'Field is required';
      }
      if (!values.checkbox) {
        errors.checkbox = 'Check this box if you want to proceed';
      }
      return errors;
    },
  });

  return (
    <div className="homepage-container">
    

      
      {!submitted ? (
        <div className="left">
          <img src={Leftimage} alt="leftimage" className="image" />
          <div className="left-image-text">Discover new things on Superapp</div>
        </div>
      ) : null}
      {!submitted ? (
        <div className="right">
          <div className="super">Super app</div>
          <div className="create"> Create your new account</div>
        </div>
      ) : null}
      {!submitted ? (
        <div className="froms">
          <form onSubmit={formik.handleSubmit}>
            <label>
              <input
                type="text"
                name="name"
                id="form1"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name ? (
                <div className="errors">{formik.errors.name}</div>
              ) : null}

    <input type="text" name="username" id='form1' placeholder='UserName' 
     value={formik.values.username} onChange={formik.handleChange}/>
     {formik.errors.username?<div className="errors">{formik.errors.username}</div>:null}



    <input type="email" name="email" id='form1' placeholder='Email'  value={formik.values.email} onChange={formik.handleChange}/>
        {formik.errors.email?<div className="errors">{formik.errors.email}</div>:null}


    <input type="text" name="mobile" id='form1' placeholder='Mobile' 
     value={formik.values.mobile} onChange={formik.handleChange}/>
     {formik.errors.mobile?<div className="errors">{formik.errors.mobile}</div>:null}
    
    <input type="checkbox" name="checkbox" id='form2'  
     value={formik.values.checkbox} onChange={formik.handleChange}/>
     {formik.errors.checkbox?<div className="errors1">{formik.errors.checkbox}</div>:null}
      
    </label>
    <div id='ticktext'>Share my registration data with Superapp</div>
    <button type="submit" id='signupbtn'>Sign Up</button>
  </form>

  <div id='ticktext2'> By clicking on Sign up. you agree to Superapp <span id='green'>Terms and <br></br>  Conditions of Use</span></div>
  <div id='ticktext3'>To learn more about how Superapp collects, uses, shares and<br></br> protects your personal data please head Superapp<span id='green'>  Privacy <br></br>Policy</span></div>
 
  </div>
    ) : null}
{submitted ? <Pagea /> : null}
  
    </div>
          
  );
};

export default Homepage;