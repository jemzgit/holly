import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;
import Video from './Video';

import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
   margin: 12,
};

const SectionVideo = () => (
    <div style={{ paddingTop: '40px'}}>
        <Divider />
        <GrApp> 
            <Heading style={{paddingTop: '20px'}}>Video</Heading>
            <Paragraph>
            This following video shows the walking route from
            On Nut BTS station (Skytrain) to our house:
            </Paragraph>
        </GrApp>

            <RaisedButton 
            href="https://upload.wikimedia.org/wikipedia/commons/c/c0/Big_Buck_Bunny_4K.webm"
            target="_blank"
            label="Download Video File" primary={true} style={style} />
        
            <Video />
    </div>
)

export default Helpers.Element(SectionVideo);