import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{backgroundColor: "#F7F4FA"}}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="post" options={{ headerShown: false }} />
          <Stack.Screen name="notice" options={{ headerShown: false }} />
          <Stack.Screen name="location" options={{ headerShown: false }} />
        </Stack>
    </SafeAreaProvider>
  );
}