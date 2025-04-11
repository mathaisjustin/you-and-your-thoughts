import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from "axios";
import { Link } from "react-router-dom";
import aboutme from '../../assets/aboutme.jpg'

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data)
    };
    getCats();
  }, []);

  return (
      <div className='sidebar'>
        <div className="sidebarItem">
          <span className="sidebarTitle">MOTIVE</span>
          <img className='sidebarImg' src={aboutme} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quae blanditiis suscipit, delectus eveniet eos numquam</p>  
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li> 
            </Link>
          ))}
          </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i> 
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
      </div>
  )
}
