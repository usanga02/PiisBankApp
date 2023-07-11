import Logo from '../../imgs/logo.png'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { SidebarData } from '../Data'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Sidebar.css";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <Link to ="/">
        <span>
          Nai<span>ra</span>Pay
        </span>
        </Link>
      </div>
      <div className='menu'>
        {SidebarData.map((item, index)=> {
          return (
            <div
              className={selected===index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >
              <item.icon />
              <Link to={item.url}>
                <span>{item.heading}</span>
              </Link>
            </div>
          );
        })}
        <div className='menuItem'>
          <Link to='/'><UilSignOutAlt /></Link>
        </div>
      </div>
    </div>
  );
}