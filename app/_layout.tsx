import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* put false so that the index will not show again  */}
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="home" options={{headerShown:false}} />
      <Stack.Screen name="login" options={{headerShown:false}} />
      <Stack.Screen name="Signup" options={{headerShown:false}} />
      <Stack.Screen name="+not-found" options={{headerShown:false}} />
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
    </Stack>
  );
}
