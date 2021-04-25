import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import colors from "../styles/colors";
import { Feather } from "@expo/vector-icons";

//import wateringImg from '../assets';
//SafeAreaView funciona com iOS
const wateringImg = require("../assets/watering.png");

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Manage {"\n"} your plants {"\n"}easily!
      </Text>
      <Image style={styles.image} resizeMode="contain" source={wateringImg} />
      <Text style={styles.subtitle}>
        Don't forget to water your plants anymore. We take care to remind you
        whenever you need it.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Feather name="chevron-right" style={styles.buttonIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24,
  },
});
