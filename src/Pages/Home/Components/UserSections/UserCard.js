import React, { useState } from "react";

const UserCard = ({ user }) => {

	const [showDetails,setShowDetails]=useState(false)

  console.log(user);
  return (
    <section className="user-section">
      <div className="user-card">
        <div>
          <h3>{user?.company?.name}</h3>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{user?.name}</p>
        </div>
        <div>
          <h4>City</h4>
          <p>{user?.address?.city}</p>
        </div>
        <div>
          <h4>State</h4>
          <p>{user?.address?.street}</p>
        </div>
        <div>
          {showDetails ? (
            <button
              onClick={() => setShowDetails(false)}
              className="details-btn"
            >
              Hide Details
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="details-btn"
            >
              View Details
            </button>
          )}
        </div>
      </div>
      {/* more details section  */}
      <section className={`${showDetails ? "d-block" : "d-none"}`}>
        <div className="details-section">
          <div className="left-side">
            <h4>Contact Person</h4>
            <p>{user?.name}</p>
            <h4>Designation</h4>
            <p>Propitor</p>
            <h4>Email</h4>
            <p>{user?.email}</p>
            <h4>Phones</h4>
            <p>{user?.phone}</p>
          </div>
          <div className="right-side">
            <h4>Address</h4>
            <p>{user?.address?.suite}</p>
            <h4>City</h4>
            <p>{user?.address?.city}</p>
            <h4>State</h4>
            <p>{user?.address?.street}</p>
            <h4>Country</h4>
            <p>India</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserCard;
