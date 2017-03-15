import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;


import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import TabBus from './TabBus'


const style = {
   margin: 12,
};

const SectionTrain= () => (
    <div style={{ paddingTop: '40px'}}>
        <Divider />
        <GrApp> 
            <Heading style={{paddingTop: '20px'}}>Bus Terminals</Heading>
            <Paragraph>
            There are two main bus terminals in Bangkok. Ekkamai Bus terminal
            and Mo Chit bus Terminal.
            </Paragraph>
        </GrApp>

        <TabBus />

    </div>
)

export default Helpers.Element(SectionTrain);