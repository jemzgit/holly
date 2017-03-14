import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const TabsExampleIconText = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">SUVARNABUMI</FontIcon>}
      label="Airport"
    />
    <Tab
      icon={<FontIcon className="material-icons">Don Muang</FontIcon>}
      label="Airport"
    />

  </Tabs>
);

export default TabsExampleIconText;