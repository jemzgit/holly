import React from 'react';
import ScrollToTop from 'react-scroll-up';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward'

const style = {
  marginRight: 20,
};

const ScrollUp =() => (
    <ScrollToTop showUnder={160}>
          <FloatingActionButton style={style}>
            <ArrowUpward />
          </FloatingActionButton>
    </ScrollToTop>
)

export default ScrollUp;
        