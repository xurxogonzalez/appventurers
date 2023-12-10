import { useFonts } from 'expo-font'

export function useCustomFonts () {
  const [fontsLoaded, fontError] = useFonts({
    'CascadiaCode-Regular': require('../../assets/fonts/CascadiaCode-Regular.ttf'),
    'CascadiaCode-Bold': require('../../assets/fonts/CascadiaCode-Bold.ttf'),
    'CascadiaCode-SemiBold': require('../../assets/fonts/CascadiaCode-SemiBold.ttf'),
  });

  return [
    fontsLoaded,
    fontError
  ]
  
}