import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  let noUnderline = {
    textDecoration: "none"
  };
  return (
    <div className="footer">
      <style jsx>{`
        .footer {
          margin-left: -10px;
          position: absolute;
          bottom: 0;
          background-color: #151b26;
          width: 100%;
        }
        .primaryFooter {
          color: white;
          display: grid;
          grid-template-columns: 1fr 1fr 10fr;
          padding-top: 80px;
          padding-bottom: 80px;
          font-family: gordita, Helvetica Neue, Helvetica, sans-serif;
        }
        .moreColumns {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        .link {
          text-decoration: none !important;
          color: white;
          margin-bottom: -5px;
          letter-spacing: 1px;
          font-size: 14px;
          font-weight: 150;
        }
        .title {
          margin-bottom: 40px;
          font-weight: 400;
          color: #9ca6af;
        }
        .imgDiv {
          text-align: center;
        }
        .topCircle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: white;
          margin-left: 7px;
        }
        .circleContainer {
          text-align: center;
          display: flex;
        }
        .circleLeft {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: white;
        }
        .circleRight {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: white;
        }

        .secondaryFooter {
          height: 150px;
          background-color: #222b37;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          color: white;
        }

        .iconDiv {
          display: flex;
          padding-top: 30px;
        }

        .icon {
          font-size: 35px;
          color: #9ca6af;
        }
      `}</style>
      <div className="primaryFooter">
        <div />
        <div className="imgDiv">
          <div className="topCircle" />
          <div className="circleContainer">
            <div className="circleLeft" />
            <div className="circleRight" />
          </div>
        </div>
        <div className="moreColumns">
          <div>
            <p className="title">Asana</p>
            <Link style={noUnderline} to="#">
              <p className="link">Home</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Product</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Pricing</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Premium</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Business</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Enterprise</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Customer Success</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Asana Templates</p>
            </Link>
            <br />
          </div>
          <div>
            <p className="title">About Us</p>
            <Link style={noUnderline} to="#">
              <p className="link">Company</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Leadership</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Customers</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Diversity</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Careers</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Press</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Wavelength</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Asana Blog</p>
            </Link>
            <br />
          </div>
          <div>
            <p className="title">Workflow Solutions</p>
            <Link style={noUnderline} to="#">
              <p className="link">Project Management</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Agile and Scrum</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Task Management</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Increase Productivity</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Work Management</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">See All Uses</p>
            </Link>
            <br />
          </div>
          <div>
            <p className="title">Team Solutions</p>
            <Link style={noUnderline} to="#">
              <p className="link">Engineering</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Designers</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Sales</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">HR</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Marketing</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">See All Teams</p>
            </Link>
            <br />
          </div>
          <div>
            <p className="title">Resources</p>
            <Link style={noUnderline} to="#">
              <p className="link">Asana Guide</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Forum</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Support</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Integrations</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Developers & API</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Partners</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Asana Community</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Certified Pros</p>
            </Link>
            <br />
            <Link style={noUnderline} to="#">
              <p className="link">Events</p>
            </Link>
            <br />
          </div>
        </div>
      </div>

      <div className="secondaryFooter">
        <div />

        <div>
          <p>English</p>
        </div>
        <div>
          <Link style={noUnderline} to="#">
            <p className="link">Terms & Privacy</p>
          </Link>
        </div>
        <div className="iconDiv">
          <a className="icon" href="">
            <FaTwitter />
          </a>
          <br />
          <a className="icon" href="">
            <FaFacebook />
          </a>
        </div>
        <div>
          <a className="link" href="">
            App Store
          </a>
        </div>
        <div>
          <a className="link" href="">
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
