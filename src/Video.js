import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const videoPath = 'https://ia801503.us.archive.org/21/items/movie_20170327/movie.webm'
const VideoComponent = () => (
            <Video 
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="https://upload.wikimedia.org/wikipedia/commons/0/08/Bangkok_Skytrain_2011.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src={videoPath} type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
        </Video>
)

export default VideoComponent;