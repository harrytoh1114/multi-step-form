import React from "react";

import thank from "../../images/icon-thank-you.svg"
import "./Complete.css";

const Complete = () => {
  return (
    <div className="complete-container">
      <div className="complete-inner-container">
        <img src={thank} alt="Thank you"/>
        <h1 className="complete-container-title">Thank you!</h1>
        <p className="complete-container-description">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default Complete;
