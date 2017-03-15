import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import {pinkA200, transparent, yellow600} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const TabsExampleIconText = () => (
  <Tabs>
    <Tab
      icon={<Avatar
            color={pinkA200} backgroundColor={transparent}
            style={{left: 4}}
          >
            BKK
          </Avatar>}
      label="SUVARNABUMI Airport"
    >
         <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
    </Tab>
    <Tab
      icon={<FontIcon className="material-icons">DMK</FontIcon>}
      label="Don Muang Airport"
    >
        <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
    </Tab>

  </Tabs>
);

export default TabsExampleIconText;