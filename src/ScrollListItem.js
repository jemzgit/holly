import React from 'react';
import {ListItem} from 'material-ui/List';
import Scroll from 'react-scroll';

const Helpers = Scroll.Helpers;

const ScrollListItem = React.createClass({
  render() {
    return (
      <ListItem {...this.props} />
    )
  }
})

export default Helpers.Scroll(ScrollListItem);