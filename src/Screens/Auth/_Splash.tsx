import React, {useEffect} from "react"
import { 
    View, 
    Text, 
    Image,
    SafeAreaView 
} from "react-native"
import { moderateScale, scale } from "../../Libs/Scaling"
import Navigator from "../../Libs/Navigator"

export default function Splash(props:any): JSX.Element {
    useEffect(() => {
      setTimeout(()=>{
        Navigator.resetRoot("Login")
      },5000)
    }, [])
    
    return (<SafeAreaView style={{flex:1}}>
        <View style={{flex:1, position:"relative", backgroundColor:"#ffe4e1", alignContent:"center", justifyContent:"center", alignItems:"center"}}>
            <Image style={{
                width: moderateScale(100),
                height: moderateScale(100),
            }} source={require("../../Images/Splash-144x144.png")} />
            <View style={{position:"absolute", bottom:30, left:0, right:0, alignItems:"center"}}>
                <Text>Version 1.0 (20)</Text>
            </View>
        </View>

    </SafeAreaView>)
}