import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{backgroundColor: "#F7F4FA"}}>
      <StatusBar style="dark" /> 
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="post" options={{ headerShown: false }} />
          <Stack.Screen name="notice" options={{ headerShown: false }} />
          <Stack.Screen name="location" options={{ headerShown: false }} />
        </Stack>
    </SafeAreaProvider>
  );
}
