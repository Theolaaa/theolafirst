import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import{Button,Alert} from "react-native"

const Counter = () => {
  //useState hook to manage count state
  const[count,setCount]= useState(0);
    

  function increment(){
    setCount(count +5)
  }

  function decrement(){
    setCount(count -5)

  }
  function reset(){
    setCount(5)
  }

  function hello(){
    Alert.alert("hello")
  }
  
  //function to increase count by 1
  //
  return (

    <View style={styles.contain}>
      
      <Text style={styles.heading}>Simple sounter</Text>
      <Text style={styles.count}>current count:{count}</Text>

       <View style={styles.buttoncontainer}>
        <Button title="increase"onPress={increment}/>
        <Button title="decrease"onPress={decrement}/>
        <Button title="reset"onPress={reset}/>
        <Button title="greetings"onPress={hello}/>
       </View>

    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  contain:{
    backgroundColor:'pink',

  },

 

  heading:{
   fontSize:22,
   textAlign:"center",
   fontWeight: "bold"
  },
  buttoncontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    paddingVertical:20,
    backgroundColor:'black',
    borderRadius:30,
    marginTop:35,
    
    
  },
  count:{
    fontSize:18,
    textAlign:"center"
    
  },
})