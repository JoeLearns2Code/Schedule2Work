import React from "react";

function Card({shiftName, children}) {
    return (
        //TODO: add an onClick function after the class name, inside <>
        <div className="card mt-4">
            <div clasName="card-header">
                <h3>
                    {shiftName}
                </h3>
            </div>
            <div className="card-body">{children}</div>
        </div>
    );
};

export default Card;