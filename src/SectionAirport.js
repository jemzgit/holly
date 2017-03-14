import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;


import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Tab from './Tab'

const style = {
   margin: 12,
};

const SectionAirport= () => (
    <div style={{ paddingTop: '40px'}}>
        <Divider />
        <GrApp> 
            <Heading style={{paddingTop: '20px'}}>Airports</Heading>
            <Paragraph>
            Bangkok has <b>two</b> international airport. Please make sure 
            you know the name of the airport before your arrival.
            </Paragraph>
        </GrApp>

        <Tab />

    </div>
)

export default Helpers.Element(SectionAirport);