import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style= {styles.header}>

        <TouchableOpacity>
        <Ionicons name="grid-outline" size={24} color="black"/>
        </TouchableOpacity>

        <View style={styles.location}>
        <Ionicons name="location-outline" size={18} color="green"/>Text
        <Text style={styles.locationText}>Dhanmondi,Dhaka</Text>
        <Ionicons name="chevron-down" size={18} color="green" style={styles.dropdownIcon}/>
        </View>

        <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black"/>
        </TouchableOpacity>

      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent: "center",
        padding: 10,
        
    },
    location:{
        flexDirection:"row",
        alignContent:"center",

    },
    locationText:{
        marginLeft:10, 
        fontSize:14,
    },
    dropdownIcon:{
        fontSize:15,

    }
    
    
})