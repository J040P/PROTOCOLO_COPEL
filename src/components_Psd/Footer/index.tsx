import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Footer_psd(){
    return(
        <View className="flex-row items-center  border-2 w-10/12 h-13 justify-between p-4 px-8 rounded-full">
            <TouchableOpacity className="items-center justify-center h-11 w-25 bg-gray-200 p-5 rounded-xl">
                <Link href={"/Pausados"} ><Text className="color-cyan-700 font-bold">Pausados</Text></Link>
            </TouchableOpacity>

            <Link href={"/home"}><Image
                source={require('../../assets/Logo/Logo_Laranja.png')}
                style={{ width: 50, height: 50 }}
            /></Link>

            <TouchableOpacity className="items-center justify-center p-5 h-11 w-25">
                <Link href={"/Finalizados"} ><Text className="color-red-800 font-bold" >Finalizados</Text></Link>
            </TouchableOpacity>
        </View>
    )
}