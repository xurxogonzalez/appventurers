import { Alert, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'

import { useCustomFonts } from '../hooks/useCustomFonts';
import { Todos } from './Todos';


export function Main () {
 
  const [ fontsLoaded, fontError ] = useCustomFonts()

  if (!fontsLoaded && !fontError) {
    return null;
  }

 // console.log(fontsLoaded, fontError)

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => Alert.alert('Hola venturers')}>
        <Text style={{ fontFamily: 'CascadiaCode-Bold', fontSize: 48 }}>AppVenturers!</Text>
      </TouchableNativeFeedback>
      <Text style={{ fontFamily: 'CascadiaCode-Regular' }}>Obradoiro</Text>
      <Todos />
      <StatusBar style="auto" backgroundColor='#f00' />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight
    // justifyContent: 'center',
  },
  defaultFont: {
    fontFamily: 'CascadiaMono'
  }
});