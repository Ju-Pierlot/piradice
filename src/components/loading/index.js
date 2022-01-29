import "./style.scss";
import React from "react";

function Loading(){
    return(
        <div className="progress-bar">
            <span className="bar">
                <span className="progress"></span>
            </span>
        </div>
    );
}
export default Loading;