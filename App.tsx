import React from 'react';
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { Satisfy_400Regular } from '@expo-google-fonts/satisfy'

import theme from './src/global/styles/theme'
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Satisfy_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />    
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent={true} backgroundColor={theme.colors.primary}/>
      <Dashboard />
    </ThemeProvider>
  )
}
