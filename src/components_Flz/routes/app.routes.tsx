import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Index from '@/src/app'

const {Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Index" component={Index} />
        </Navigator>
    )
}