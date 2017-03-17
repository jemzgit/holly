import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import HomeIcon from 'material-ui/svg-icons/action/home';

import Scroll from 'react-scroll'
import ScrollListItem from './ScrollListItem'
const scroller = Scroll.scroller;

function GoToContact() {
    scroller.scrollTo('MyContact', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Contact us"
    onClick={GoToContact} />
  </IconMenu>
);

Logged.muiName = 'IconMenu';


class AppBarExampleComposition extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <AppBar
          title="Holly's"
          iconElementLeft={<IconButton><HomeIcon/></IconButton>}
          iconElementRight={<Logged /> }
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;