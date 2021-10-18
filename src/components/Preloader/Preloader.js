import React from "react";
import "./Preloader.scss";

const Preloader = () => {
    return (
        <div className="backdrop">
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};
export default Preloader;
