import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import{Button,} from "react-native"

const Counter = () => {
  //useState hook to manage count state
  const[count,setCount]= useState(0);
    
  //function to increase count by 1
  //
  return (

    <View style={StyleSheet.container}>
      <Text>Counter</Text>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})