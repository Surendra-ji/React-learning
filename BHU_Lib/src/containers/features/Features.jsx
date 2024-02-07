import React from "react";
import './features.css'

import { Notices, UsefulComponent, ELinks } from '../../components';

const Features = () => {
    return (
        <div className="features">
            <Notices/>
            <UsefulComponent/>
            <ELinks/>
        </div>
    )
}

export default Features;