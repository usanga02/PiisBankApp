import Logo from '../../imgs/logo.png'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarData } from '../Data'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UilBars } from "@iconscout/react-unicons";
import "./Sidebar.css";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };
  const [selected, setSelected] = useState(0);
  const sidebarVariants = {
    expanded: {
      left: "0",
    },
    collapsed: {
      left: "-60%",
    },
  };
  
  return (
   
    
    <div>
      <div className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={handleToggleExpand}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={expanded ? "expanded" : "collapsed"}
      >
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
      </motion.div>
    </div>
  );
}