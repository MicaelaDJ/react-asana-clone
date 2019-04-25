import React from "react";

function Employee(props) {
  return (
    <div className="grid-container">
        <style jsx>{`
            .employeeContainer {
                vertical-align: text-top;
                width: 300px;
                text-align: center;
                display: inline-block;
                margin: 15px;
                
            }
            img {
                height: 300px;
                display: inline-block;
            }
            .grid-container {
                display: inline-block;
                height: auto;
                
            }
            .bio {
                height: 200px;
            }
        `}

        </style>
        <div className="employeeContainer">
            <img src={props.image} alt="photo of leadership team member"/>
            <h2>{props.name}</h2>
            <h5>{props.title}</h5>
            <div className="bio"><p>{props.bio}</p></div>
        </div>
    </div>
        
  );
}

export default Employee;