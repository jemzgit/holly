import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;


import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import Table from './Table';


const style = {
   margin: 12,
};

const SectionContact= () => (
    <div style={{ paddingTop: '40px'}}>
        <Divider />
        <GrApp> 
            <Heading style={{paddingTop: '20px'}}>Contact Information</Heading>
            <Paragraph>
            Here is various ways that you can contact us:
            </Paragraph>
        </GrApp>
                    <Table />
        

    </div>
)

export default Helpers.Element(SectionContact);