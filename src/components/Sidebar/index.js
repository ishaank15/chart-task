
import React from 'react'
import { FaTachometerAlt, FaChartBar, FaSearch, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sideBar">
            <div className="icon active"> <FaTachometerAlt /></div>
            <div className="icon"> <FaSearch /></div>
            <div className="icon"> <FaChartBar /></div>
            <div className="icon"> <FaEnvelope /></div>
            <div className="icon"> <FaTachometerAlt /></div>
            <div className="icon"> <FaSearch /></div>
            <div className="icon"> <FaChartBar /></div>
            <div className="icon"> <FaEnvelope /></div>
        </div>
    )
}

export default Sidebar;