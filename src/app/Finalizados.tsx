import { View } from "react-native";
import Constants from 'expo-constants';
import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pde_Psd from "../components_Psd/Pde";
import Footer_psd from "../components_Psd/Footer";
import Pde_flz from "../components_Flz/Pde";
import Footer_flz from "../components_Flz/Footer";


const Tab = createBottomTabNavigator();

const statusBarHeight = Constants.statusBarHeight;

export default function Filanizado() {

  return (  
    <View className="w-full h-full items-center gap-5 bg-gray-100">
      <View className="w-full items-center" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
      </View>
      <View className="w-full items-center">
        <Title />
      </View>
      <View className="w-full items-center h-3/5">
        <Pde_flz/>
      </View>
      <View className="relative w-full items-center justify-center">
        <Footer_flz/>
      </View>
    </View>
  );
}
