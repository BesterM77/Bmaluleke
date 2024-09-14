import React from "react";
import "./ProfileCard.css"; // Include custom styles

const ProfileCard = () => {
  return (
    <div className="card profile-card">
      <header className="header">
        <img
          src="https://play-lh.googleusercontent.com/iz6CoFfcIyh-gJdL6nSVVj7GsxBdanqvPdkf747I2rgMVE46diOkm8UOdIRW3EHl6Cg=w240-h480-rw" // Placeholder URL for the logo
          alt="Logo"
          className="logo"
        />
        <button className="menu-button">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </button>
      </header>
      <div className="profile-image">
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="rounded"
          className="profile-image"
        />
      </div>
      <h3 className="name">Danny Hazelwood</h3>
      <h1 className="symbol">~</h1>
      <div className="footer-message">Founder — Zeropay</div>
    </div>
  );
};

export default ProfileCard;
