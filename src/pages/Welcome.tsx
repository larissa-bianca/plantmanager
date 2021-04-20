import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import { Button } from "../components/Button";

//import wateringImg from '../assets';
//SafeAreaView funciona com iOS
const wateringImg = require("../assets/watering.png");
export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Manage {"\n"} your plants {"\n"}easily!
      </Text>
      <Image style={styles.image} source={wateringImg} />
      <Text style={styles.subtitle}>
        Don't forget to water your plants anymore. We take care to remind you
        whenever you need it.
      </Text>
      <Button title="Go" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
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
    width: 292,
    height: 284,
  },
});
