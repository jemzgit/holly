import React from 'react';
import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';

import '../node_modules/grommet/grommet.min.css';

const myQuote = () => (
  <Quote credit='Ricky Baker'>
    <Paragraph>
      Trees. Birds. Rivers. Sky.
    </Paragraph>
    <Paragraph>
      Running with my Uncle Hec
    </Paragraph>
    <Paragraph>
      Living forever.
    </Paragraph>
  </Quote>
)
export default myQuote;