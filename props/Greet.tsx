import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface GreetProps{
name: string;
age: number;
}

const Greet:  React.FC<GreetProps> =({name,age}) => {
  return (
    <View>
      <Text> Good day{name}</Text>
      <Text> i am {age} years old</Text>
    </View>
  )
}

export default Greet

const styles = StyleSheet.create({})