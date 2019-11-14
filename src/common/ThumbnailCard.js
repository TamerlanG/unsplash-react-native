import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

const ThumbnailCard = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <Image
                style={{ width: "47%", height: 150, margin: 4, }}
                source={{ uri: props.thumbnailUrl }}
            />
        </TouchableWithoutFeedback>
    )
}

export default ThumbnailCard
