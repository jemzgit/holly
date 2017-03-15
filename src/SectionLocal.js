import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;


import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import Title from 'grommet/components/Title';


const style = {
   margin: 12,
};

const SectionLocal= () => (
    <div style={{ paddingTop: '40px'}}>
        <Divider />
        <GrApp> 
            <Heading style={{paddingTop: '20px'}}>Local Attractions</Heading>
            <Paragraph>
            Here are some local places that you can visit in our Area:
            </Paragraph>

            <Title>Train Night Market</Title>
            <Paragraph> you can take Song tao to go to train night market.
                </Paragraph>
            
            <Title>Big C and Lotus Tesco</Title>
            <Paragraph>If you plan to buy anything at a resonable price,
                these two shopping centers are near the On Nut BTS station
            </Paragraph>

            <Title>Thong Lor and Sukhumvit Clubs</Title>
            <Paragraph>Don't miss on the night life in bangkok. It is fun!
            </Paragraph>

            <Title>Ekkamai Bus terminal</Title>
            <Paragraph> This bus terminal is near us
            </Paragraph>

 


        </GrApp>

        

    </div>
)

export default Helpers.Element(SectionLocal);