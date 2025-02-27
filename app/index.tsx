import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { images } from "@/content/assets";
import { Href,router } from "expo-router";

const{ width,height }=Dimensions.get('window');

const index = () => {
  return (
    <View style={styles.wrapper}>
      {/*Background Image*/}
      <Image source={images.bg} style={styles.bgimage} />


      <View style={styles.overlay}>
        {/* heading */}
        <Text style={styles.topText}>
          The Fastest In Delivery 
          <Text style={styles.foodtext}>Food</Text>
        </Text>
        
        
        {/* Subtitle */}
        <Text style={styles.subText}>
          our job is to filling your tummy with delicious food and fast delivery.
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={()=> router.push('/login' as Href)}>
        <Text style={styles.buttontext}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, //makes the view take up the full screen
    backgroundColor: 'white', //Fall background color
  },
  bgimage: {
    width:width,
    height:height,
     position:'absolute',
    resizeMode: 'cover', //covers the screen with no blank soace
    top: 0
  },
  overlay:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'lightblue',
    borderTopLeftRadius:"30%",//smooth curves
    borderTopRightRadius: "30%",//smoth curves
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: 'black',//not necessary
    shadowOffset:{width: 0, height: 5},
    shadowRadius:8,
    elevation: 5,
  },
  topText:{
    fontSize: 42,
    fontWeight:'bold',
    textAlign: 'center',
    color: '#333',
  },
  subText:{
    fontSize: 18,
    textAlign: 'center',
    color:'#7D7D7D',
    marginTop:10,
    paddingHorizontal: 20,
  },
  foodtext:{
    color:'#9AD983'
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
});
