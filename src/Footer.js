/*import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import StarIcon from 'material-ui/svg-icons/action/grade';
import FlatButton from 'material-ui/FlatButton';

const recentsIcon = <EmailIcon />;
const favoritesIcon = <StarIcon />;
const nearbyIcon = <IconLocationOn />;


class Footer extends Component {
    render(){
        return (
            <Paper zDepth={2}>

                <FlatButton label="Primary" primary={true} style={{float: 'left'}} />
                
                <FlatButton label="© 2017 James Abtahi" 
                secondary={true} style={{float: 'right'}} />
            </Paper>
        )
    }
}

export default Footer;*/

import React from 'react'
import Footer from 'grommet/components/Footer';
import GrApp from 'grommet/components/App';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';

class FooterComponent extends React.Component {
    render(){
        return (
            <GrApp>
               <Footer justify='between'>
                <Title>
                    Holly's House
                </Title>
                <Box direction='row'
                    align='center'
                    pad={{"between": "medium"}}>
                    <Paragraph margin='none'>
                    © 2017 James Abtahi
                    </Paragraph>
                    <Menu direction='row'
                    size='small'
                    dropAlign={{"right": "right"}}>
                    
                    <Anchor href='#'>
                        jemz.org
                    </Anchor>
                    </Menu>
                </Box>
                </Footer>
</GrApp>
        )
    }
}

export default FooterComponent;
