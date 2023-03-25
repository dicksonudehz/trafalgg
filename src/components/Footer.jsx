import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="mainFooterContainer">
        <div className="leftFooterCate">
          <div className="leftFooterCatItems">
            <h1>t </h1>
            <span>trafalg</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem<br /> 
            velit fugit, blanditiis harum temporibus eveniet  labore odio sit<br />
            est error quas sed facere similique praesentium suscipit
          </p>
          <div className="copyright"> &copy; Trafalgar PTY LTD 2020. Al rights reserved </div>
        </div>
        <div className="companyFooterCat">
          <h1>company</h1>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>testimonial</li>
            <li>find a doctor</li>
            <li>apps</li>
          </ul>
        </div>
        <div className="regionFooterCat">
          <h1>region</h1>
          <ul>
            <li>indonesia</li>
            <li>singapole</li>
            <li>hongkong</li>
            <li>canada</li>
            <li>indonia</li>
          </ul>
        </div>
        <div className="helpFooterCat">
          <h1>help</h1>
          <ul>
            <li>help center</li>
            <li>contact support</li>
            <li>instructions</li>
            <li>how it works</li>
            <li>help center</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
