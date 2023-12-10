# appventurs

> [!NOTE]
> Obradoiro appventurers
> Móvil App 📱

## Requisitos

- Instalar la **app** "Expo" en android y IOS
- Instalar para los **emuladores** "Android Studio"


## Personalización de fuentes

Instalación:

```sh
npx expo install expo-font
```

Ejemplo de configuración utilizando un **hook**:

```js
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
```


## Custom Text

[Gist Webferrol](https://gist.github.com/webferrol/7d749c3b5b9477b999ecdd94fc1c3c5e)