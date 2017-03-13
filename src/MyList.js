import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent, yellow600} from 'material-ui/styles/colors';

import ActionHome from 'material-ui/svg-icons/action/home';
import LocationIcon from 'material-ui/svg-icons/action/room';
import VideoIcon from 'material-ui/svg-icons/notification/ondemand-video';
import AirportIcon from 'material-ui/svg-icons/maps/local-airport';
import TrainIcon from 'material-ui/svg-icons/maps/train';
import BusIcon from 'material-ui/svg-icons/maps/directions-bus';
import DiningIcon from 'material-ui/svg-icons/maps/local-dining'
import EmailIcon from 'material-ui/svg-icons/communication/email'
import StarIcon from 'material-ui/svg-icons/action/grade'


import Scroll from 'react-scroll'
const scroller = Scroll.scroller;

import ScrollListItem from './ScrollListItem'

function handleActive(tab) {
  alert(`First item was clicked`);
}



function handleGo(){
    scroller.scrollTo('myParag', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
    //scroll.scrollToBottom();
}

function handleParag1() {
    scroller.scrollTo('myParag1', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
}



const ListExampleContacts = () => (
  <MobileTearSheet>
    <List>
      <ScrollListItem onClick={handleGo}
        primaryText="Rooms"
        leftIcon={<ActionHome color={pinkA200} />}
        rightAvatar={<Avatar src="images/chexee-128.jpg" />}
      />
      <ScrollListItem onClick={handleParag1}
        primaryText="Location on Map"
        leftIcon={<LocationIcon color={pinkA200} />}
        insetChildren={true}
        rightAvatar={<Avatar src="images/angelceballos-128.jpg" />}
      />
      <ListItem
        primaryText="Video"
        leftIcon={<VideoIcon color={pinkA200} />}
        insetChildren={true}
        rightAvatar={<Avatar src="images/angelceballos-128.jpg" />}
      />
      
      <ScrollListItem onClick={handleGo}
        primaryText="Directions From The Airports"
        leftIcon={<AirportIcon color={pinkA200}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/kolage-128.jpg" />}
      />
      <ScrollListItem onClick={handleParag1}
        primaryText="Coming From Train Station"
        leftIcon={<TrainIcon color={pinkA200}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
      <ScrollListItem onClick={handleParag1}
        primaryText="Coming From Bus Station"
        leftIcon={<BusIcon color={pinkA200}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
    </List>
    <Divider inset={true} />
    <List>
      <ListItem
        primaryText="Get to Tourist Attractions"
        leftIcon={<StarIcon color={pinkA200}/>}
        rightAvatar={<Avatar src="images/adellecharles-128.jpg" />}
      />
      <ListItem
        primaryText="Main Attractions near BTS and MRT"
        leftAvatar={
          <Avatar
            color={pinkA200} backgroundColor={transparent}
            style={{left: 4}}
          >
            BTS
          </Avatar>
        }
        insetChildren={true}
        rightAvatar={<Avatar src="images/adhamdannaway-128.jpg" />}
      />
      <ListItem
        primaryText="Local Attraction"
        leftIcon={<DiningIcon color={pinkA200}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/allisongrayce-128.jpg" />}
      />
    </List>
      <ListItem
        primaryText="Contact"
        leftIcon={<EmailIcon color={pinkA200}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/kerem-128.jpg" />}
      />

    </MobileTearSheet>
);

export default ListExampleContacts;