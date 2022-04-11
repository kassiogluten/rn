import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { Test } from "./src/components/Test";
import theme from "./src/styles/theme";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Test />
    </ThemeProvider>
  );
}
