import React from 'react';
import WorldMap from 'grommet/components/WorldMap';
import '../node_modules/grommet/grommet.min.css';

const GrometWorldMap = () => {
  return (
    <WorldMap series={[{
  "continent": "NorthAmerica",
  "label": "North America",
  "value": 40,
  "colorIndex": "graph-1",
  "onClick": "..."
}, {
  "continent": "SouthAmerica",
  "label": "South America",
  "value": 30,
  "colorIndex": "accent-2",
  "onClick": "..."
}, {
  "continent": "Europe",
  "label": "Europe",
  "value": 20,
  "colorIndex": "unset",
  "onClick": "..."
}, {
  "continent": "Africa",
  "label": "Africa",
  "value": 10,
  "colorIndex": "graph-2",
  "onClick": "..."
}, {
  "continent": "Asia",
  "label": "Asia",
  "value": 15,
  "colorIndex": "graph-3",
  "onClick": "..."
}, {
  "continent": "Australia",
  "label": "Australia",
  "value": 10,
  "colorIndex": "graph-4",
  "onClick": "..."
}]} />
  );
};

export default GrometWorldMap;