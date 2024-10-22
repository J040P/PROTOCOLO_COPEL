import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Footer(){
    return(
        <View className="flex-row items-center  border-2 w-10/12 h-13 justify-between p-4 px-8 rounded-full">
            <TouchableOpacity className="items-center justify-center h-11 w-20">
                <Text className="color-cyan-700 font-bold">Pausados</Text>
            </TouchableOpacity>

            <Image
                source={require('../../assets/Logo/Logo_Laranja.png')}
                style={{ width: 50, height: 50 }}
            />

            <TouchableOpacity className="items-center justify-center  h-11 w-20">
                <Text className="color-red-800 font-bold" >Finalizados</Text>
            </TouchableOpacity>
        </View>
    )
}