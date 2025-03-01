import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import Counter from '@/useState/Counter'
import Nameinput from '@/useState/Nameinput'
import Greet from '@/props/Greet'
import ActionButton from '@/props/ActionButton'
import { Alert } from 'react-native'
import User from '@/map/User'
const home = () => {
  function message(){
    Alert.alert( 'hiii')
  }


  return (
    <SafeAreaView>
      <Header/>
      <Counter/>
      <Nameinput/>
      <Greet name='theola' age={18}/>
      < ActionButton title= 'my button' press={message}/>
      <User/>
      
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})