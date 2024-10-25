import { Stack } from 'expo-router'
import '../styles/global.css'


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name='home' options={{ title: "Home"}}/>
      <Stack.Screen name='Finalizados' options={{ title: "Finalizados"}}/>
      <Stack.Screen name='Pausados' options={{ title: "Pausados"}}/>
    </Stack>
  )
}
