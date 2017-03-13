import React, { Component } from 'react';
import logo from './logo.svg';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './AppBar'
import MyList from './MyList'

import './App.css';

import SampleParag from './SampleParag'
import SampleParag1 from './SampleParag1'

import MyQuote from './MyQuote'
import WorldMap from './WorldMap'

import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';



/*class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

const App = () => (
  <MuiThemeProvider>
    <div style={{maxWidth:800, margin: 'auto', padding: '5'}}>

      <AppBar />
      <GrApp>
        <Heading>
          Holly's Hostel
        </Heading>
        <Paragraph margin="medium">
          Welcome to Holly's Hostel! You can find various information regarding locations and navigation in bangkok in here.
        </Paragraph>


      </GrApp>
      <MyList />

      <SampleParag name="myParag" />
      <SampleParag1 name="myParag1" />


      
    </div>
  </MuiThemeProvider>
);

export default App;
