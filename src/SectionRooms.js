import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;

import MyCard from './MyCard';

const Rooms = () => (
    <div>
        <MyCard Image='images/first-room.jpg' 
        Title='Spacious Private Room'
        Subtitle='Private Room'
        RoomName='Daisy'
        Avatar='images/bunny.png'
        Airbnb='https://www.airbnb.com/rooms/17796090'
        Hostelworld=''
        Content='Comfortable private bedroom located in Sukhumvit 
        area just 5 minutes of walking distance from On Nut BTS 
        (skytrain) station with free Wi-Fi, AirCon, TV, Stove, 
        Fridge, Electric kettle. There is also a lounge with 
        couch and tables that you can relax.'
        />
        <br/>
        <MyCard Image='images/second-room.jpg' 
        Title='Cozy Private Room' 
        Subtitle='Private Room'
        Airbnb='https://www.airbnb.com/rooms/17818103'
        Hostelworld=''
        RoomName='Rosie'
        Avatar='images/bunny.png'
        Content='Cozy private bedroom located in Sukhumvit area just 
        5 minutes of walking distance from On Nut BTS (skytrain) station 
        with free Wi-Fi, AirCon, Washing machine, Fridge, Electric kettle.
         There is also a lounge with couch and tables that you can relax
         and work.'
        />
        <br/>
        <MyCard Image='images/third-room.jpg' 
        Title='Comfortable Shared Room'
        Subtitle='Shared Room'
        RoomName='Lilly'
        Airbnb='https://www.airbnb.com/rooms/17815459'
        Hostelworld=''
        Avatar='images/bunny.png'
        Content='A single comfortable bed located in Sukhumvit area
         just 5 minutes of walking distance from On Nut BTS (skytrain) 
         station with free WiFi, AirCon, TV, fridge and electric kettle.
          There is also a lounge with couch and tables that you can relax 
          and work.
'
        />
    </div>
)

export default Helpers.Element(Rooms);