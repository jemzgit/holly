import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;


import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
   margin: 12,
};

const SectionTrain= () => (
    <div style={{ paddingTop: '40px'}}>
        <Divider />
        <GrApp> 
            <Heading style={{paddingTop: '20px'}}>Train Station</Heading>
            <Paragraph>
            'Hua Lamphong' train station is Bangkok's main train station. It is also connected
            to Hua Lamphong MRT station (subway). When you arrive at Hua Laumphong
            train station, you go to MRT station and take subway to 'Sukhumvit' MRT
            station. Sukhumit MRT station is connected to Asok BTS station. Then you take
            the BTS (skytrain) to On Nut BTS station.
            </Paragraph>
        </GrApp>

        

    </div>
)

export default Helpers.Element(SectionTrain);