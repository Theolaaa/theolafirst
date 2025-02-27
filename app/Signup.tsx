import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { images, icons } from "@/content/assets";

const Signup = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={images.signup}
        resizeMode="cover"
        style={styles.signupimage}
      >
        <View style={styles.contain}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Sign up</Text>
        </View>

        <View style={styles.styles}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={icons.google} style={styles.socialicon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={icons.facebook} style={styles.socialicon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={icons.ios} style={styles.socialicon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>or, register with email</Text>
        <View>
          <Text style={styles.inputText}>full name</Text>
          <TextInput
            placeholder="Type Your full name"
            placeholderTextColor={"brown"}
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Email address</Text>
          <TextInput
            placeholder="Type Your Email Address"
            placeholderTextColor={"brown"}
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.inputText}>password</Text>
          <TextInput
            placeholder="Type Your passowrd"
            secureTextEntry
            placeholderTextColor={"brown"}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}> sign up </Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Already have an account?
          <Text style={styles.registerText2}>login</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white"
  },
  signupimage: {
    height: "50%",
  },
  line: {
    backgroundColor: "#DEDEDE",
    height: 4,
    marginTop: 10,
    marginHorizontal: "40%",
    borderRadius: 30,
  },
  contain: {
    backgroundColor: "white",
    marginTop: "40%",
    borderTopLeftRadius: "10%", //smooth curves
    borderTopRightRadius: "10%", //smoth curves
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 35,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,
  },
  inputText: {
    fontSize: 15,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#9AD983",
    paddingVertical: 18,
    width: "100%",
    borderRadius: 30,
    marginTop: 25,
    alignItems: "center",
  },
  buttontext: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
    color: "#888",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  socialBtn: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  socialicon: {
    width: 50,
    height: 40,
  },
  registerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
    textDecorationLine: "underline",
  },
  registerText2: {
    textAlign: "center",
    marginTop: 20,
    color: "green",
    textDecorationLine: "underline",
  },
  input: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    borderRadius: 20,
  },
  styles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
