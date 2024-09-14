import React from "react";
import "./GrowthCard.css"; // Include custom styles

const GrowthCard = () => {
  return (
    <div className="card growth-card">
      <header className="head">
        <img
          src="https://play-lh.googleusercontent.com/iz6CoFfcIyh-gJdL6nSVVj7GsxBdanqvPdkf747I2rgMVE46diOkm8UOdIRW3EHl6Cg=w240-h480-rw" // Placeholder URL for the logo
          alt="Logo"
          className="logo"
        />
        <button className="menu-button">
          <div className="menu"></div>
          <div className="menu"></div>
        </button>
      </header>
      <div className="slogan">
        <h1>Boost</h1>
        <h2>Your Earning</h2>
        <h3>Today.</h3>
      </div>
      <div className="row-text">
        <img
          src="https://www.google.com/imgres?q=signature&imgurl=https%3A%2F%2Frepository-images.githubusercontent.com%2F8805592%2F85279ffa-7f4a-4880-8e41-59e8032b0f71&imgrefurl=https%3A%2F%2Fgithub.com%2Fszimek%2Fsignature_pad&docid=Yq-U-v0cyR7DVM&tbnid=eaA-LIdMVqqXaM&vet=12ahUKEwj99cbG5L-IAxXo3wIHHcNCNCkQM3oECB0QAA..i&w=640&h=320&hcb=2&ved=2ahUKEwj99cbG5L-IAxXo3wIHHcNCNCkQM3oECB0QAA"
          alt="sig"
          className="sig"
        />
        <div className="text">
          <p>Growth from 2022 to Today</p>
        </div>
      </div>
      <p className="growth-value">$14.2K</p>
      <img
        src="https://www.example.com/growth-image.png"
        alt="growth"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
};

export default GrowthCard;
