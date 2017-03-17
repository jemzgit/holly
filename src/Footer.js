import React from 'react'
import Footer from 'grommet/components/Footer';
import GrApp from 'grommet/components/App';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';


class FooterComponent extends React.Component {
    render(){
        return (

            <GrApp>
                
               <Footer justify='between'>

                <Box 
                
                    align='center'
                    pad={{"between": "medium"}}>
                     <Anchor  href='http://jemz.org'>
                       James Abtahi © 2017 
                    </Anchor>
                
                </Box>
                </Footer>
</GrApp>

        )
    }
}

export default FooterComponent;
