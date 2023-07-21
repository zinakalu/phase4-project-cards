import React from "react";

function StateCard({ stateName, fetchStateDetails }) {
  return (
    <div className="StateCard" onClick={fetchStateDetails}>
      <h3>{stateName}</h3>
    </div>
  );
}

export default StateCard;
