import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme.js'
import StyledText from './StyledText.jsx'
import { Link,useLocation } from 'react-router-native'

const AppBar = () => {

    return (
        <View style={styles.container}>
            <AppBarTab active to='/' >Cats breeds</AppBarTab>
            {/* <AppBarTab to='/breeds' >breeds</AppBarTab> */}
        </View>
    )
}

const AppBarTab = ({ children, to }) => {

    const{ pathname } = useLocation()

    const active = pathname === to

    const textStyles = [
        styles.text,
        active & styles.active
    ]

    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>)
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: 'row',
        paddingBottom: 10,
        paddingLeft: 10
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textPrimary
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10,
    }
})

export default AppBar;