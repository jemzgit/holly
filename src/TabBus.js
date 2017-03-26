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
            Ekkamai
          </Avatar>}
      label="Eastern Terminal"
    >
         <div>
            <h2 style={styles.headline}>Ekkamai Eastern Bus Terminal</h2>
            <p>
              Ekkamai bus terminal (Eastern bus terminal) is located near our house. You can easily
              go by BTS near our house (On Nut BTS station) to Ekkamai BTS station.
            </p>
          </div>
    </Tab>
    <Tab
      icon={<FontIcon className="material-icons">Mo Chit</FontIcon>}
      label="Northern Terminal"
    >
        <div>
            <h2 style={styles.headline}>Mo Chit Bus Terminal</h2>
            <p>
              You can go to Mo Chit Bus Terminal by BTS. You take BTS train
              from On Nut station and go to Mo Chit BTS station. You have
              to exchange the BTS train at Siam station.
            </p>
          </div>
    </Tab>

  </Tabs>
);

export default TabsExampleIconText;