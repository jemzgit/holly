import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;

import Map from './Map'

import RaisedButton from 'material-ui/RaisedButton';

import Value from 'grommet/components/Value';

import GrApp from 'grommet/components/App';

import Pulse from 'grommet/components/icons/Pulse';
import Divider from 'material-ui/Divider';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';









const style = {
   margin: 12,
};
const Location = () => (

    <div style={{ paddingTop: '40px'}}>
    <Divider />
    <GrApp>
        
    <Heading style={{paddingTop: '20px'}} align='center'>GPS Location</Heading>
   <Paragraph>
        We are located near the On Nut BTS station. The walking distance
        is only five minutes from the BTS station. 
    </Paragraph>
   <Paragraph>
  You can copy and paste the following GPS coordinate in Google Maps or 
  any other map tool to see the location of our house. Also you can click
  on Google Map button or check the map below:
</Paragraph>
    <Value  value={'13.709472,100.598222'} />

    <RaisedButton 
    href="https://www.google.co.th/maps/place/13%C2%B042'34.1%22N+100%C2%B035'53.6%22E/@13.7127746,100.5876632,15z/data=!4m6!3m5!1s0x30e29fc0198f0dbf:0x792531397d9d9cdf!7e2!8m2!3d13.7094725!4d100.5982232?hl=en"
    target="_blank"
    label="Open in Google Maps" primary={true} style={style} />
    
    <div className="leaflet-container">
        <Map/>
       </div>
    
    </GrApp>

       

    </div>
)

export default Helpers.Element(Location);