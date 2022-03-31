import React, { Component } from 'react';
import Title from './Title';

import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const title = 'Planetas';

    return (
      <div data-testid="solar-system">
        <Title headline={ title } />

        {planets.map((planet, index) => (
          <PlanetCard
            key={ index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
