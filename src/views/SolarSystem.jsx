import { useCallback } from 'react';
import { Earth, Moon, Sun } from '../objects';
import { planetSelected, planetUnSelected } from '../store/planetSlice';
import planetaryData from '../data/planetaryData';

function SolarSystem({ dispatch }) {
  const handlePlanetClick = useCallback((planetName) => {
    const planetData = planetaryData[planetName];
    dispatch(planetSelected(planetData));
  }, []);

  const handleSunClick = useCallback(() => {
    dispatch(planetUnSelected());
  }, []);

  return (
    <>
      <Sun onClick={handleSunClick} />
      <Earth position={[5, 0, 0]} onClick={handlePlanetClick} />
      <Moon position={[8, 0, 0]} onClick={handlePlanetClick} />
    </>
  );
}

export default SolarSystem;
