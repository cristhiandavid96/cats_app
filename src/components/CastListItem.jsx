import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText.jsx'
import theme from '../theme'

const CatsInfoAdicional = props => {
    return <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
            <StyledText align='center' fontWeight='bold'>inteligencia</StyledText>
            <StyledText align='center' >{props.intelligence}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Pais</StyledText>
            <StyledText align='center' >{props.origin}</StyledText>
        </View>
    </View>
}

const CastListItem = (props) => {
    const { image, name, description, id } = props
    return (
        <View key={id} style={styles.container}>
            <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                <View style={{ paddingRight: 10 }}>
                    <Image source={{ uri: image?.url }} style={styles.image} />
                </View>
                <View style={{ flex: 1 }}>
                    <StyledText fontWeight='bold'>{name}</StyledText>
                    <StyledText color='secondary'>{description}</StyledText>
                    <CatsInfoAdicional {...props} />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5,
    },
    language: {//nose utiliza
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        marginTop: 4,
        marginBottom: 4,
        overflow: 'hidden',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 4,
    }
})

export default CastListItem;
