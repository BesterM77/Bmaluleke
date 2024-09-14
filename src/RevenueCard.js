import React from "react";
import "./RevenueCard.css"; // Include custom styles

const RevenueCard = () => {
  return (
    <div className="card revenue-card">
      <header className="header">
        <img
          src="https://play-lh.googleusercontent.com/iz6CoFfcIyh-gJdL6nSVVj7GsxBdanqvPdkf747I2rgMVE46diOkm8UOdIRW3EHl6Cg=w240-h480-rw" // Placeholder URL for the logo
          alt="Logo"
          className="logo"
        />
        <button className="menu-button">
          <div className="menu-lin"></div>
          <div className="menu-lin"></div>
        </button>
      </header>
      <h1 className="title">Revenue</h1>
      <h2 className="revenue">2.45%</h2>
      <p className="description">Average Return — Value</p>
      <div className="stats">
        <div className="bar-chart">
          {/* Bar chart example (use SVG or CSS for better visuals) */}
          <div
            className="bar up"
            style={{ height: "50px", width: "50px" }}
          ></div>
          <div className="bar down" style={{ height: "80px" }}></div>
        </div>
        <div className="value1">
          <p>+2.4%</p>
        </div>
        <div className="value2">
          <p>-3.2% (D)</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
