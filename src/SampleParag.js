import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;

import MyCard from './MyCard';

const SampleParag = () => (
    /*<div style={{height:500}}>
        The constitutional complaint is an adjudication system where anyone whose basic rights guaranteed under the Constitution has been infringed upon by the governmental power, can file a constitutional complaint. Anyone, including judicial persons may file a constitutional complaint. Unlike other adjudications of the Constitutional Court, where the National Assembly, executive branch, or ordinary court is the claimant, the individual citizen becomes the claimant in constitutional complaint, and it aims to directly relieve the person from violation of basic rights. Therefore, constitutional complaint is the core of our systematic mechanisms to assure basic rights. With the introduction of the constitutional complaint system, Korean democracy took an important step forward; it also has contributed to the revitalization of the constitutional adjudication system.[1]
        When conflicts arise between state and local governments and agencies about the duties and authorities of each institution, it not only endangers the principle of checks and balances between public powers, but also risks paralyzing an important government function. This may pose a threat to the basic rights of citizens, which calls for a systematic coordinating mechanism. Our Constitution has endowed the Constitutional Court the jurisdiction on the adjudication on competence disputes, as part of a function to safeguard the Constitution.[1]
        The Constitutional Court has exclusive jurisdiction over impeachment proceedings brought against certain high-ranking public officials. In general, impeachment prosecution is done by the National Assembly; in bicameral countries it is done by the higher house, and some countries have a separate Court of Impeachment, but the Korean Constitution endowed exclusive jurisdiction of impeachment to the Constitutional Court.[1]
    </div>*/
    <div>
        <MyCard Image='images/first-room.jpg'/>
        <MyCard Image='images/second-room.jpg' />
        <MyCard Image='images/third-room.jpg' />
    </div>
)

export default Helpers.Element(SampleParag);