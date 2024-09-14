import React from "react";
import RevenueCard from "./RevenueCard";
import ProfileCard from "./ProfileCard";
import GrowthCard from "./GrowthCard";
import "./Dashboard.css"; // Include custom styles

const Dashboard = () => {
  return (
    <div className="dashboard">
      <RevenueCard />
      <ProfileCard />
      <GrowthCard />
    </div>
  );
};

export default Dashboard;
