import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent, yellow600} from 'material-ui/styles/colors';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';


import Scroll from 'react-scroll'
const scroll = Scroll.animateScroll;
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
      <ScrollListItem onClick={handleActive}
        primaryText="Introduction"
        leftIcon={<ActionHome color={pinkA200} />}
        rightAvatar={<Avatar src="images/chexee-128.jpg" />}
      />
      <ScrollListItem onClick={handleGo}
        primaryText="Find our house"
        leftIcon={<ActionGrade color={yellow600}/>}
        insetChildren={true}
        rightAvatar={<Avatar src="images/kolage-128.jpg" />}
      />
      <ScrollListItem onClick={handleParag1}
        primaryText="Local attraction"
        insetChildren={true}
        rightAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
      <ListItem
        primaryText="Main attractions near BTS and MRT"
        insetChildren={true}
        rightAvatar={<Avatar src="images/kerem-128.jpg" />}
      />
    </List>
    <Divider inset={true} />
    <List>
      <ListItem
        primaryText="Adelle Charles"
        leftAvatar={
          <Avatar
            color={pinkA200} backgroundColor={transparent}
            style={{left: 8}}
          >
            A
          </Avatar>
        }
        rightAvatar={<Avatar src="images/adellecharles-128.jpg" />}
      />
      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
        rightAvatar={<Avatar src="images/adhamdannaway-128.jpg" />}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
        rightAvatar={<Avatar src="images/allisongrayce-128.jpg" />}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
        rightAvatar={<Avatar src="images/angelceballos-128.jpg" />}
      />
    </List>

    </MobileTearSheet>
);

export default ListExampleContacts;