import { useCallback, useRef } from 'react';
import { Euler, MathUtils } from 'three';
import { useSelector } from 'react-redux';
import { Earth, Orbit, Moon } from '../objects';
import { planetSelected } from '../store/planetSlice';
import planetaryData from '../data/planetaryData';
import { RELATIVE_SCALE, MOON_TO_EARTH_DISTANCE } from '../data/constants';

function EarthAndMoonScene({ dispatch }) {
  const earthRef = useRef();
  const moonRef = useRef();

  const { planetsScale = 1, speed = 1 } = useSelector(
    (state) => state.controls
  );

  const handlePlanetClick = useCallback((planetName) => {
    const planetData = planetaryData[planetName];
    dispatch(planetSelected(planetData));
  }, []);

  return (
    <>
      <pointLight
        color="white"
        intensity={2}
        distance={500}
        castShadow
        position={[200, 0, 0]}
      />
      <Earth
        ref={earthRef}
        relativeScale={1 * planetsScale * 0.01}
        onClick={handlePlanetClick}
        rotationSpeed={speed * 0.48}
      />
      <Orbit
        position={[MOON_TO_EARTH_DISTANCE / RELATIVE_SCALE, 0, 0]}
        orientation={new Euler(MathUtils.degToRad(5), 0, 0)}
        rotationSpeed={speed * 0.00001}
      >
        <Moon
          ref={moonRef}
          relativeScale={0.25 * planetsScale * 0.01}
          onClick={handlePlanetClick}
        />
      </Orbit>
    </>
  );
}

export default EarthAndMoonScene;