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
            <Paragraph>
                <b>Note:</b> Please download the video file and save it on your phone. Therefore, you can see the video on your arrival again in case you don't have access to the internet.
            </Paragraph>
        </GrApp>

            <RaisedButton 
            href="https://ia801503.us.archive.org/21/items/movie_20170327/movie.webm"
            target="_blank"
            label="Download Video File" primary={true} style={style} />
        
            <Video />
    </div>
)

export default Helpers.Element(SectionVideo);