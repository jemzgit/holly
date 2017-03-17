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
            <h2 style={styles.headline}>Suvarnabhumi Airport</h2>
            <p>
              Suvarnabhumi Airport is the largest and the main airport in Bangkok.
              This airport handles the majority of international flights. 
              It has several convenient public transportation systems including the
              well-known Airport Link which is a the train system that connected airport
              to the the rest of Bangkok city.
            </p>
          </div>
    </Tab>
    <Tab
      icon={<FontIcon className="material-icons">DMK</FontIcon>}
      label="Don Muang Airport"
    >
        <div>
            <h2 style={styles.headline}>Don Muang Airport</h2>
            <p>
              Don Muang is the second international airport in Bangkok and is mainly
              used for flights to and from other eastern asian countries (China, Singapore, Malaysia, etc)
              as well as domestic flights. Unlike Suvarnabhumi, Don Muang airport 
              does NOT have easy public transportation. However, you can always easily
              find taxi right outside the airport. A word of caustion, the taxis
              inside airport are very expensive. Do not use airport taxis. Instead
              walk outside the airport priemeter to the main road and you can
              easily find normal taxis with meter. Please make sure they turn on the meter

            </p>
          </div>
    </Tab>

  </Tabs>
);

export default TabsExampleIconText;