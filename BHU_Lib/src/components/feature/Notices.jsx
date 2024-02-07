import React,{useState} from "react";
import './notices.css'
import {noticeitems} from './noticeItems.js'
import {Link} from 'react-router-dom';

function Notices() {

    const [click, setClick] = useState(false);

    return (
     <div className="notices">
        <ul>
        {noticeitems.map((item, index) => {
          return (
            <li key={index}>
               <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        </ul>
     </div>
    )
}

export default Notices 