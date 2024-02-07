import React from "react";
import './usefulcomponent.css'
import plagarism from '../../assets/seobanner.png';

const UsefulComponent = () => {
    return (
        <div className="usefulcomponent">
            <div className="usefulcomponent_img">
                <img src={plagarism} alt="e_library" />
                <p>e_library</p>
            </div>
            <div className="usefulcomponent_img">
                <img src={plagarism} alt="soul" />
                <p>soul</p>
            </div>
            <div className="usefulcomponent_img">
            <img src={plagarism} alt="plagarism" />
            <p>plagarism</p>
            </div>
        </div>
    )
}

export default UsefulComponent;