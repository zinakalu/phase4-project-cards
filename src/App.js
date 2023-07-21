import React, { useEffect, useState } from "react";
import StateCard from "./StateCard";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5555/parks")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleStateClick = (park) => {
    setSelectedPark(park);
  };

  return (
    <div className="app-container">
      <div className="card-container">
        {data.map((park, index) => (
          <StateCard
            key={index}
            stateName={park.name}
            fetchStateDetails={() => handleStateClick(park)}
          />
        ))}
      </div>
      {selectedPark && (
        <div className="park-details">
          <h2>{selectedPark.name}</h2>
          <p>{selectedPark.location}</p>
          <p>Activities:</p>
          <ul>
            {selectedPark.activities.split(", ").map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
          <p>Campgrounds:</p>
          <ul>
            {selectedPark.campgrounds.split(", ").map((campground, idx) => (
              <li key={idx}>{campground}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
