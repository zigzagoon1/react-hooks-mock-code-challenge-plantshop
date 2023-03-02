import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then((plants) => {
      setPlants(plants) }
      ); 
  }, [])
  function addPlant(plant) {
    const updatedPlants = [...plants, plant];
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant)
    })
    .then(r => r.json)
    .then((plant) => setPlants(updatedPlants));
  }

  function handleSearch(value){
    if (value === "" || value === null) {
      fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then((plants) => {
        setPlants(plants) }
        ); 
    }
      const filteredPlants = plants.filter((plant) => {
        return plant.name.toLowerCase().includes(value);
    })
    setPlants(filteredPlants);
  }

  return (
    <main>
      <NewPlantForm handleAddPlant={addPlant} plants={plants}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
