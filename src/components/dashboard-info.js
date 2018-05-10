import React from 'react';
import '../componentStyles/DashboardInfo.css';


const DashboardInfo = (props) => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
            <p className="dashboard-text">Let's get started and search some recipes!</p>
        </div>
    )
}

export default DashboardInfo;