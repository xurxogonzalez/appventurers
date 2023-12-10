import { StyleSheet, Text } from 'react-native'
import theme from '../theme.js'

export function CustomText ({ children, color, fontSize, fontWeight, ...restOfProps }) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'big' && styles.big,
    fontWeight === 'bold' && styles.fontBold
  ]
  
  return <Text style={textStyles} {...restOfProps}>{children}</Text>
}


const styles = StyleSheet.create({
  text: {
    color: theme.colors.normal,
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.normal
  },
  big: {
    fontSize: theme.fontSizes.big
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.secondary
  },
  fontBold: {
    fontWeight: theme.fontWeights.bold
  }  
})

