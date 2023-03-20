import React from "react"
import { 
    View, 
    Text, 
    SafeAreaView,
    TouchableOpacity
} from "react-native"

export default function Login(props:any): JSX.Element {
    function onPress() {

    }
    return (<SafeAreaView style={{flex:1}}>
        <View style={{flex:1, alignItems:"center", justifyContent:"center", alignContent:"center"}}>
            <Text>Login screen</Text>
            <TouchableOpacity onPress={onPress}>
                <Text>Click to Home</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>)
}