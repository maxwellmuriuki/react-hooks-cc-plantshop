import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // State for holding the fetched plants data
  const [plants, setPlants] = useState([]);
  // State for holding the search input value
  const [search, setSearch] = useState("");

  // Fetching plants data once on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data); // Update state with fetched plants
        console.log(data); // Log data for debugging purposes
      });
  }, []); // Empty dependency array ensures this runs only once

  // Filter plants based on the search input
  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="app">
      <Header />
      {/* Pass filtered plants, setPlants, search, and setSearch as props */}
      <PlantPage
        plants={filteredPlants}
        setPlants={setPlants}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
