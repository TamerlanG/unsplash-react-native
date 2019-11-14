import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Photo = (props) => {
    const data = props.navigation.getParam("data");
    return (
        <View style={styles.center}>
            <Image
                style={styles.image}
                source={{ uri: data.regular }}
            />
        </View >
    )
}

export default Photo

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#000",
    },
    image: {
        marginTop: 10,
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    }
});