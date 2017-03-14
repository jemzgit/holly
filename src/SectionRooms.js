import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;

import MyCard from './MyCard';

const Rooms = () => (
    <div>
        <MyCard Image='images/first-room.jpg'/>
        <MyCard Image='images/second-room.jpg' />
        <MyCard Image='images/third-room.jpg' />
    </div>
)

export default Helpers.Element(Rooms);