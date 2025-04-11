import React from 'react'
import about from "../../assets/aboutme.jpg"
import "./about.css"
import { Link } from "react-router-dom";

export default function About() {
  return (
      <div className='about'>
        <div className="aboutWrapper">  
        <img src={about} alt="" className="aboutImg" />
        <div className="aboutText">
            <h1 className="aboutTitleLg">About Me</h1>
            <h5 className="aboutTitleSm">Developer <span className='aboutSpan'> & Designer</span></h5>  
            <p className="aboutDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut odio itaque asperiores aliquid eius, libero nihil deleniti quia, nobis voluptatibus nulla optio assumenda perspiciatis, quos distinctio modi neque accusantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut odio itaque asperiores aliquid eius, libero nihil deleniti quia, nobis voluptatibus nulla optio assumenda perspiciatis, quos distinctio modi neque accusantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut odio itaque asperiores aliquid eius, libero nihil deleniti quia, nobis voluptatibus nulla optio assumenda perspiciatis, quos distinctio modi neque accusantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut odio itaque asperiores aliquid eius, libero nihil deleniti quia, nobis voluptatibus nulla optio assumenda perspiciatis, quos distinctio modi neque accusantium.
            </p>
            <button type='button' className="aboutButton"><Link className="link" to="/contact">Let's Talk</Link></button>  
            </div>   
        </div>      
    </div>
  )
}
