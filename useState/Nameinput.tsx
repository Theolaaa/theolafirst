import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState,} from 'react';
import { TextInput, Button,Alert } from 'react-native'


const Nameinput = () => {

  const[firstName,setfirstName]=useState("");
    const[email,setEmail]=useState("");
    const[lastName,setlastName]=useState("");

    
    function submit(){
      // Alert.alert("Form submitted" + " "+ firstName + " " +lastName);

      Alert.alert("Form submitted", `Email: ${email}\nfirstname: ${firstName}\nlastname :${lastName}`);

    }



    

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Users Information</Text>
      
      <TextInput
      style={styles.input}
      placeholder='Enter your first name'
      placeholderTextColor={"brown"}
      value={firstName}
      onChangeText={(text) => setfirstName (text)}/>

<TextInput
      style={styles.input}
      placeholder='Enter your last name'
      placeholderTextColor={"brown"}
      value={lastName}
      onChangeText={(text) => setlastName (text)}/>

<TextInput
      style={styles.input}
      placeholder='Enter your email name'
      placeholderTextColor={"brown"}
      value={email}
      onChangeText={(text) => setEmail (text)}/>
        
        <View style={styles.buttoncontainer}>
        <Button title="Submit"onPress={submit}/>
        </View>
        
    </View>
  )
}

export default Nameinput

const styles = StyleSheet.create({
    input:{
    fontSize: 15,
    marginVertical: 10,
    paddingVertical:10,
    borderRadius: 40,
    backgroundColor: "#F5F5F5",
    },
    container:{
        backgroundColor:"white",
    },

    heading:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttoncontainer:{
      justifyContent:'center',
      paddingHorizontal:15,
      paddingVertical:20,
      backgroundColor:'black',
      borderRadius:30,
      marginTop:35,
      marginHorizontal: 80,
      

      
    }
})