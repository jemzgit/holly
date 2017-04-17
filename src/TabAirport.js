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
              To come to our house, you take Airport Link (train) at 
              the airport to Phaya Thai Station and change to BTS (skytrain).
              Then you take BTS to On Nut station and you can use the video to 
              find our house from On Nut. You can also take a taxi meter from 
              Suvarnabhumi to our place. Taking a taxi could cost cheaper in
              case you are travelling with another person. It costs roughly around 150 Thai Baht.
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
              does NOT have easy public transportation. If you prefer to use public transportation
              you can find some bus from the airport (such as number 82) to Mo Chit BTS Station
              and take BTS(skytrain) to our place.
              
  
              You can also easily
              find taxi right outside the airport. A word of caution, the taxis
              inside airport are very expensive. Do not use airport taxis. Instead
              walk outside the airport priemeter to the main road and you can
              easily find normal taxis with meter which are a lot cheaper. Please make sure the taxi turn on the meter.
              You can show taxi driver the address provided on this page.

            </p>
          </div>
    </Tab>

  </Tabs>
);

export default TabsExampleIconText;