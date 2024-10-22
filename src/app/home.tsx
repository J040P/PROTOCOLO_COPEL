import { View } from "react-native";
import Constants from 'expo-constants';
import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pde from "../components/Pde";  // Certifique-se de que isso é o componente correto
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {

  return (
    <View className="w-full h-full items-center gap-5 bg-gray-100">
      <View className="w-full items-center" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
      </View>
      <View className="w-full items-center">
        <Title />
      </View>
      <View className="w-full items-center h-3/5">
        <Pde />
      </View>
      <View className="relative w-full items-center justify-center">
        <Footer />
      </View>
    </View>
  );
}
