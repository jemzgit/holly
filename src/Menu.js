import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pink900, cyanA200, amberA200, indigoA200, orangeA200, limeA200, pinkA200, blueA200, greenA200, purpleA200, brown500, transparent, yellow600, blue500 } from 'material-ui/styles/colors';

import HomeIcon from 'material-ui/svg-icons/action/home';
import LocationIcon from 'material-ui/svg-icons/action/room';
import VideoIcon from 'material-ui/svg-icons/notification/ondemand-video';
import AirportIcon from 'material-ui/svg-icons/maps/local-airport';
import TrainIcon from 'material-ui/svg-icons/maps/train';
import BusIcon from 'material-ui/svg-icons/maps/directions-bus';
import DiningIcon from 'material-ui/svg-icons/maps/local-dining'
import EmailIcon from 'material-ui/svg-icons/communication/email'
import StarIcon from 'material-ui/svg-icons/action/grade'


import Scroll from 'react-scroll'
import ScrollListItem from './ScrollListItem'
const scroller = Scroll.scroller;


function GoToRooms(){
    scroller.scrollTo('MyRooms', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
    //scroll.scrollToBottom();
}

function GoToLocation() {
    scroller.scrollTo('MyLocation', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
}

function GoToVideo() {
    scroller.scrollTo('MyVideo', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
}

function GoToAirport() {
    scroller.scrollTo('MyAirport', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
}

function GoToTrain() {
    scroller.scrollTo('MyTrain', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
}

function GoToAttraction() {
    scroller.scrollTo('MyAttraction', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
}

function GoToBus() {
    scroller.scrollTo('MyBus', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
}

function GoToLocal() {
    scroller.scrollTo('MyLocal', {
    duration: 500,
    delay: 100,
    smooth: true,
  })
}

const ListExampleContacts = () => (
  <MobileTearSheet>
    <List>
      <ScrollListItem onClick={GoToRooms}
        primaryText="Rooms"
        leftIcon={<HomeIcon color={greenA200} />}
        rightAvatar={<Avatar src="images/room.png" />}
      />
      <ScrollListItem onClick={GoToLocation}
        primaryText="Location on The Map"
        leftIcon={<LocationIcon color={blueA200} />}
        insetChildren={true}
        rightAvatar={<Avatar src="images/map.png" />}
      />
      <ScrollListItem onClick={GoToVideo}
        primaryText="Video"
        leftIcon={<VideoIcon color={pinkA200} />}
        insetChildren={true}
        rightAvatar={<Avatar src="images/video.png" />}
      />
      
      <ScrollListItem onClick={GoToAirport}
        primaryText="Directions From the Airports"
        leftIcon={<AirportIcon color={purpleA200}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/airplane.png" />}
      />
      <ScrollListItem onClick={GoToTrain}
        primaryText="Coming From the Train Station"
        leftIcon={<TrainIcon color={pink900}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/train.jpg" />}
      />
      <ScrollListItem onClick={GoToBus}
        primaryText="Coming From the Bus Station"
        leftIcon={<BusIcon color={cyanA200}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/bus.png" />}
      />
    </List>
    <Divider inset={true} />
    <List>
      <ScrollListItem onClick={GoToAttraction}
        primaryText="Get to Tourist Attractions"
        leftIcon={<StarIcon color={orangeA200}/>}
        rightAvatar={<Avatar src="images/attraction.jpg" />}
      />
      <ScrollListItem onClick={GoToLocal}
        primaryText="Local Attraction"
        leftIcon={<DiningIcon color={amberA200}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/local.png" />}
      />
    </List>
      <ListItem
        primaryText="Contact"
        leftIcon={<EmailIcon color={indigoA200}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/mail.png" />}
      />

    </MobileTearSheet>
);

export default ListExampleContacts;