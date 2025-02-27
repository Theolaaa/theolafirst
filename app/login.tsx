import { StyleSheet, Text, View, ImageBackground,TextInput,TouchableOpacity,Image,  } from "react-native";
import React from "react";
import { images,icons } from "@/content/assets";
import { Href,router } from "expo-router";


const login = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={images.loginpic}
        resizeMode="cover"
        style={styles.loginimage}
      >
        <View style={styles.contain}>
            <View style={styles.line}></View>
          <Text style={styles.title}>Login</Text>
          <View>
            <Text style={styles.inputText}>Email address</Text>
            <TextInput 
            placeholder='Type Your Email Address'
            placeholderTextColor={"brown"}
            style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.inputText}>password</Text>
            <TextInput 
            placeholder='Type Your passowrd'
            secureTextEntry
            placeholderTextColor={"brown"}
            style={styles.input}
            />
          </View>
          {/* Button */}
                  <TouchableOpacity style={styles.button} onPress={()=> router.push('/(tabs)/home' as Href)}>
                  <Text style={styles.buttontext}> log in </Text>
                  </TouchableOpacity>
                   <Text style={styles.orText}>or, login with</Text>

                  <View style={styles.social}>
                    <TouchableOpacity style ={styles.socialBtn}>
                       < Image source={icons.google} style={styles.socialicon}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.socialBtn}>
                        <Image source={icons.facebook} style={styles.socialicon}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.socialBtn}>
                        < Image source={icons.ios} style={styles.socialicon}/>
                      </TouchableOpacity>
                  </View>

                  <TouchableOpacity onPress={()=> router.push('/Signup' as Href)}>
                    <Text style={styles.registerText}>Haven't account?  <Text style={styles.registerText2}>Register now</Text></Text> 
                   
               </TouchableOpacity>
               

        </View>
      </ImageBackground>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  loginimage: {
    height: "50%",
  },
   line:{
    backgroundColor: "#DEDEDE",
    height: 4,
    marginTop: 10,
    marginHorizontal:"40%",
    borderRadius: 30,
  },
  contain: {
    backgroundColor: "white",
    marginTop: "40%",
    borderTopLeftRadius:"10%",//smooth curves
    borderTopRightRadius: "10%",//smoth curves
    paddingHorizontal:10,
  },
  title: {
    fontSize:35,
    color: "black",
    fontWeight: "bold",
    marginTop:20,
  },
inputText:{
    fontSize: 15,
    marginVertical: 10,
},
input:{
    backgroundColor: "#F5F5F5",
    paddingVertical:10,
    borderRadius: 20,
},
button:{
    backgroundColor: '#9AD983',
    paddingVertical:18,
    width:'100%',
    borderRadius:30,
    marginTop: 25,
    alignItems: 'center',

  },
  buttontext:{
    color:'white',
    fontSize:18,
    fontWeight: 'bold',

  },
  orText:{
    textAlign:'center',
    marginVertical:20,
    color:'#888',

  },
  social:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
  },
  socialBtn:{
    backgroundColor:'#F5F5F5',
    padding:15,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
    socialicon:{
      width:50,
      height:40,

    },
    registerText:{
      textAlign:'center',
      marginTop:20,
      color:'#888',
      textDecorationLine:'underline',
    },
    registerText2:{
      textAlign:'center',
      marginTop:20,
      color:'green',
      textDecorationLine:'underline'
    }

  
 

});
