import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
const home = () => {
  return (
    <SafeAreaView>
      <Header/>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})