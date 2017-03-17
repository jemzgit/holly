import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './AppBar'
import Menu from './Menu'

import './App.css';

import SectionRooms from './SectionRooms'
import SectionLocation from './SectionLocation'
import SectionVideo from './SectionVideo'
import SectionAirport from './SectionAirport'
import SectionTrain from './SectionTrain'
import SectionBus from './SectionBus'
import SectionAttraction from './SectionAttraction'
import SectionLocal from './SectionLocal'
import SectionContact from './SectionContact'
import Footer from './Footer';

import {Card, CardText} from 'material-ui/Card'


import '../node_modules/grommet/grommet.min.css';
import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';


const App = () => (
  <MuiThemeProvider>
    <div style={{maxWidth: '800px', margin: 'auto', padding: '5px'}}>

      <AppBar />

      <GrApp>
        


        <Columns style={{paddingTop: '20px', paddingBottom:'20px'}}>
        <Box align='left' pad='medium' margin='small'>
          <Heading align="center" style={{paddingTop: "20px"}}>
          Holly's House
        </Heading>
        <Paragraph margin="medium">
        
          Welcome to Holly's House! We are a small guesthouse located in Bangkok, Thailand.
          You can find various information regarding locations and navigation in bangkok in here.
          Furthermore we have a video that shows how to walk from the On Nut BTS
          station to our place.
          We strive to make you feel welcome and comfortable in our house.
          Hope you enjoy your stay! 
        </Paragraph>
        </Box>
        
        <Box align='right'>
        <Card>
        <Image src="images/third-room.jpg" float={"right"} size={'medium'}/>
        <CardText>
          Sit, relax and enjoy your stay ;)
        </CardText>
        </Card>
        
        </Box>
        </Columns>
        
        
       
      </GrApp>

      <Menu />

      <SectionRooms name="MyRooms" />
      <SectionLocation name="MyLocation" />
      <SectionVideo name="MyVideo" />
      <SectionAirport name="MyAirport" />
      <SectionTrain name="MyTrain" />
      <SectionBus name="MyBus"/>
      <SectionAttraction name="MyAttraction" />
      <SectionLocal name="MyLocal"/>
      <SectionContact name="MyContact"/>


      <Footer />
    </div>
  </MuiThemeProvider>
);

export default App;
