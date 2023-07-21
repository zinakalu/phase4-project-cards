import React, { useEffect, useState } from "react";

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
    <div>
      {data.map((park, index) => (
        <div key={index} onClick={() => handleStateClick(park)}>
          <h2>{park.name}</h2>
        </div>
      ))}
      {selectedPark && (
        <div>
          <h2>{selectedPark.name}</h2>
          <p>{selectedPark.location}</p>
          <p>Activities:</p>
          <ul>
            {selectedPark.activities.split(", ").map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
