import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'


//estilar mis componentes

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.normal,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.secondary,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    textAlignCenter: {
        textAlign: 'center',
    }
})

export default function StyledText({ align, children, color, fontSize, fontWeight, style, ...props }) {
    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style,
    ]
    return (
        <Text style={textStyles} {...props}>
            {children}
        </Text>
    )

}
