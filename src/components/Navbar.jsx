import React from 'react';

function Navbar(){
    return(
        <div className="navBar">
            <style jsx>{`
            img {
                height: 22px;
                display: inline-block;
            }
            .navBar {
                padding: 9px 8px 9px 8px; 
                display: flex;
                grid-template-columns: 4fr, 3fr;
                
            }
            .block {
                display: inline-block;
            }
            .right {
                display: inline-block;
                position: absolute;
                right: 0px;
                margin-top: -12px;
            }
            .button {
                border: none;
                background-color: white;
                font-size: 15px;
                color: #646f79;
                font-weight: 400;
                font-family: gordita,Helvetica Neue,Helvetica,sans-serif;
                letter-spacing: .5px;
                margin-right: 20px;
                position: relative;
                display: inline-block;

            }
            button:hover{
                cursor: pointer;
            }
            .buttonPurple {
                background-color: #796eff;
                color: white;
                padding: 10px 17px 10px 17px;
                border-radius: 4px;
                font-size: 15px;
                font-weight: 400;
                font-family: gordita,Helvetica Neue,Helvetica,sans-serif;
                letter-spacing: .5px;
                margin-right: 20px;
                border: none;
            }

            .dropdown {
                display: inline-block;
            }
            `}</style>
            <div className="block">
                <img src="https://luna1.co/0fc2ef.png"/>
            </div>
            <div className="right">
              <button className="button">Templates</button>
              <button className="button">Product</button>
              <button className="button">Pricing</button>
              <div className="dropdown"> 
                <button className="button">Solutions</button>
              </div>
              <div className="dropdown">
                <button className="button">Contact Sales</button>
              </div>
              
              <button className="button">Log In</button>
              <button className="buttonPurple">Try for free</button>
            </div>
        </div>
    );
}

export default Navbar;