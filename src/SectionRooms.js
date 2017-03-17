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
        Content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
        />
        <br/>
        <MyCard Image='images/second-room.jpg' 
        Title='Cozy Private Room' 
        Subtitle='Private Room'
        RoomName='Lily'
        Avatar='images/bunny.png'
        Content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
        />
        <br/>
        <MyCard Image='images/third-room.jpg' 
        Title='Comfortable Shared Room'
        Subtitle='Shared Room'
        RoomName='Molly'
        Avatar='images/bunny.png'
        Content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
        />
    </div>
)

export default Helpers.Element(Rooms);