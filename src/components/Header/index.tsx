import { View, Text, TextInput } from "react-native"
import { Image } from 'react-native'
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Header(){
 return(
    <View className="flex-row items-center justify-center gap-6 p-4 w-full">
        <Image
            source={require('../../assets/Logo/Logo_Preta.png')}
            style={{ width: 50, height: 50 }}
        />
        <View className="flex-row items-center justify-start gap-2 bg-white w-2/4 h-12 rounded-full border-solid border-2 border-gray-400" >
            <Octicons className="pl-4" name="search" size={19} color="orange" />
            <TextInput className="text-sm font-medium max-w-32" placeholder="Pesquisar"></TextInput>
        </View>
        <MaterialIcons className="color-orange-400" name="filter-list" size={40} color="orange" />
    </View>
 )
}