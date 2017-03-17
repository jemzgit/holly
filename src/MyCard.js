import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = (Props) => (
  <Card>
    <CardHeader
      title={Props.RoomName}
      subtitle={Props.Subtitle}
      avatar={Props.Avatar}
    />
    <CardMedia
      overlay={<CardTitle title={Props.Title} subtitle={Props.Subtitle} />}
    >
      <img src={Props.Image} />
    </CardMedia>
    <CardTitle title={Props.Title} subtitle={Props.Subtitle} />
    <CardText>
      {Props.Content}
    </CardText>
    <CardActions>
      <FlatButton label="Book On Airbnb" />
      <FlatButton label="Book On HostelWorld" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;