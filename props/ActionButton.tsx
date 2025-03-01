import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native';


interface ActionButtonProps{
    title: string;
    press: ()=> void;
}
const ActionButton: React.FC<ActionButtonProps>= ({title,press}) => {
  return <Button title={title} onPress={press} />
    
  
};

export default ActionButton

const styles = StyleSheet.create({})