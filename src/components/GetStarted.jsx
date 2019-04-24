import React from "react";

function GetStarted() {
  return (
    <div className="wrapper">
      <style jsx>{`
        .wrapper {
          text-align: center;
          margin: 100px;
          position: relative;
        }
        .button {
          color: white;
          background-color: #796eff;
          border-radius: 4px;
          padding: 15px 23px 15px 23px;
          font-weight: 400;
          font-family: gordita, Helvetica Neue, Helvetica, sans-serif;
          letter-spacing: 0.5px;
          font-size: 15px;
        }
        .input {
          height: 45px;
          margin-right: 30px;
          width: 390px;
          border: 2px solid #eeeeee;
          margin-bottom: 100px;
        }
        input::placeholder {
          color: #ccc;
          font-size: 15px;
          padding-left: 15px;
          font-weight: 75;
        }
        h1 {
          font-size: calc(33.75px + 11.25 * ((100vw - 480px) / 800));
          line-height: 1.244;
          color: #151b26;
          font-weight: 400;
          margin-bottom: 32px;
          margin-top: 0;
          font-family: gordita, Helvetica Neue, Helvetica, sans-serif;
        }

        h3 {
          font-size: 1.375rem;
          line-height: 1.636;
          font-family: gordita, Helvetica Neue, Helvetica, sans-serif;
          font-weight: 300;
          color: ;
        }
      `}</style>
      <h1>
        Make more time for the work that
        <br />
        matters most
      </h1>
      <h3>
        Asana is the work management platform teams use to stay focused on the
        goals, projects, and daily tasks that grow business.
      </h3>
      <input placeholder="name@company.com" className="input" />
      <button className="button">Try for free</button>
    </div>
  );
}

export default GetStarted;
