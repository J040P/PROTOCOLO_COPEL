import { View, Text} from "react-native";

export default function Title(){
    return(
        <View className="w-10/12 flex-row justify-center items-center gap-8">
            <Text className="font-extrabold color-orange-400 text-4xl">PDE</Text>
            <Text className="flex-1 h-2 bg-orange-400 rounded-full"></Text>
        </View>

    )
}