import React from 'react';
import {Card, CardItem, Thumbnail, Text, Left, Body, Icon, Image} from 'native-base';


export default function (props) {
    const item = props.photo;

    return (
        <Card style={{elevation: 3}}>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: item.user.profile_image.large}}/>
                    <Body>
                    <Text>{item.user.name}</Text>
                    <Text note>{item.user.instagram_username}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Thumbnail style={{height: 350, flex: 1}} source={{uri: item.urls.small}}/>
            </CardItem>
            <CardItem>
                <Icon name="heart" style={{color: item.color}}/>
                <Text>{item.likes}</Text>
            </CardItem>
        </Card>
    )
}






