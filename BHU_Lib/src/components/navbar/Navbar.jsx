import React, {useState} from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

import { IoHome } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

// import {Dropdown} from "../../components"
import {AboutItems, LibraryServicesItems, CollectionItems, RequestLibraryItems, AccessLibraryItems} from './menuItems.js'

function Dropdown({files, visual}) {
  const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

  return (
    <div className={visual?"list_of_items":"not_show"}>
      <ul>
        {files.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(true)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const Navbar = () => {

    const [click, setClick] = useState(false);
    var [dropdown1, setDropdown1] = useState(false);
    var [dropdown2, setDropdown2] = useState(false);
    var [dropdown3, setDropdown3] = useState(false);
    var [dropdown4, setDropdown4] = useState(false);
    var [dropdown5, setDropdown5] = useState(false);

    const handleClick = () => setClick(!click);

    return (
      <div className="navbar">
        <div className="navbar__home-icon">
          <IoHome size={25} color={"white"}/>
        </div>
        <div className="navbar__links">
          <div className="dropdown-content"
          onMouseEnter={() => {window.innerWidth > 960 && setDropdown1(true);}}
          onMouseLeave={() => {window.innerWidth > 960 && setDropdown1(false);}}
          >
            <p>
            About <FaCaretDown className="change"/>
            </p>
            <Dropdown files = {AboutItems} visual={dropdown1}/>
          </div>
          <div className="dropdown-content"
          onMouseEnter={() => {window.innerWidth > 960 && setDropdown2(true);}}
          onMouseLeave={() => {window.innerWidth > 960 && setDropdown2(false);}}
          >
            <p>
            Library Services <FaCaretDown className="change"/>
            </p>
            <Dropdown files = {LibraryServicesItems} visual={dropdown2}/>
          </div>
          <div className="dropdown-content"
          onMouseEnter={() => {window.innerWidth > 960 && setDropdown3(true);}}
          onMouseLeave={() => {window.innerWidth > 960 && setDropdown3(false);}}
          >
            <p>
            Collection <FaCaretDown className="change"/>
            </p>
              <Dropdown files = {CollectionItems} visual={dropdown3}/>
          </div>
          <div className="dropdown-content"
          onMouseEnter={() => {window.innerWidth > 960 && setDropdown4(true);}}
          onMouseLeave={() => {window.innerWidth > 960 && setDropdown4(false);}}
          >
            <p>
            Request Library <FaCaretDown className="change"/>
            </p>
              <Dropdown files = {RequestLibraryItems} visual={dropdown4}/>
          </div>
          <div className="dropdown-content"
          onMouseEnter={() => {window.innerWidth > 960 && setDropdown5(true);}}
          onMouseLeave={() => {window.innerWidth > 960 && setDropdown5(false);}}
          >
            <p>
            Access Library <FaCaretDown className="change"/>
            </p>
              <Dropdown files = {AccessLibraryItems} visual={dropdown5}/>
          </div>
          <span><Link to='/pages/Requisition.js'>Contacts</Link></span>
            </div>
        </div>
    );
};

export default Navbar;