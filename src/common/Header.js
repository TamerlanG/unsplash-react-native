import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../themes/color';

const Header = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>Latest Photos</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: 1,
        borderBottomColor: colors.BLACK,
        paddingBottom: 5,
        paddingLeft: 5,
    }
})