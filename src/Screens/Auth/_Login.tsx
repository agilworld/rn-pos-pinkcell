import React, {useState, useCallback, useEffect } from "react"
import { 
    View,  
    SafeAreaView,
    TouchableOpacity,
    BackHandler,
    Image
} from "react-native"
import { Text, TextInput, Button } from "react-native-paper"
import { moderateScale } from "../../Libs/Scaling"
import Navigator from "../../Libs/Navigator"

type FieldErrors = {
    username?:string,
    password?:string
}

export default function Login(props:any): JSX.Element {

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState<FieldErrors>()

    useEffect(()=>{
        const backAction = () => {
            return true;
        };
      
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();

    },[])

    function onPress() {

    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const onLogin = () => {
        console.log("navigator", Navigator)
        if( pass && username ) {
          props.navigation.navigate("Main")
        } else {
            const pErrors: FieldErrors = {}
            if( !pass ) {
               pErrors.password = "You must enter valid password"
            }
            if( !username) {
               pErrors.username = "You must enter username"
            }
            setErrors({
                ...errors,
                ...pErrors
            })
        }
    }

    return (<SafeAreaView style={{flex:1}}>
        <View style={{flex:1, alignItems:"flex-start", justifyContent:"flex-start", alignContent:"center"}}>
            <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", marginTop:50}}>
                <Image style={{
                    width: moderateScale(42),
                    height: moderateScale(42),
                }} source={require("../../Images/Login-72x72.png")} />
                <View style={{marginLeft:20}}>
                    <Text variant="bodyLarge">PINK Cell</Text>
                    <Text variant="bodySmall" style={{color:"grey"}}>POS App Version 1.0</Text>
                </View>
            </View>
           
            
            <View style={{flex:1, width:"100%", paddingVertical:30}}>
                <TextInput
                    label="Username"
                    value={username}
                    mode="outlined"
                    maxLength={20}
                    error={errors?.username?true:false}
                    onChangeText={text => {
                        setUsername(text)
                        if( errors?.username ) setErrors({...errors, username:undefined})
                    }}
                />
                {errors?.username ? <Text style={{color:"red"}} variant="bodySmall">{errors?.username}</Text> : null}

                <TextInput
                    label="Password"
                    value={pass}
                    mode="outlined"
                    style={{marginTop:10}}
                    maxLength={20}
                    onChangeText={text => {
                        setPass(text)
                        if( errors?.password ) setErrors({...errors, password:undefined})
                    }}
                    secureTextEntry={!showPassword}
                    error={errors?.password?true:false}
                    right={<TouchableOpacity onPress={togglePassword}>
                        <Text style={{fontSize:12}} variant="bodyMedium">
                            {showPassword?"Hide":"Show"}
                        </Text>
                    </TouchableOpacity>}
                />

                {errors?.password ? <Text  style={{color:"red"}} variant="bodySmall">{errors?.password}</Text> : null}         

                <Button mode={"contained"} style={{marginTop:25,paddingVertical:8,borderRadius:90}} onPress={onLogin}>
                    Sign In
                </Button>
            </View>
        </View>
    </SafeAreaView>)
}