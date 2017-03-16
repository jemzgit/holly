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


import '../node_modules/grommet/grommet.min.css';
import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';




const App = () => (
  <MuiThemeProvider>
    <div style={{maxWidth: '800px', margin: 'auto', padding: '5px'}}>

      <AppBar />

      <GrApp>
        
        <Heading align="center" style={{paddingTop: "20px"}}>
          Holly's House
        </Heading>
        <Paragraph margin="medium">
        
          Welcome to Holly's Hostel! You can find various information regarding locations and navigation in bangkok in here.
        </Paragraph>
        <Image src="images/bunny.png" float={"right"} size={'small'}/>
        

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
