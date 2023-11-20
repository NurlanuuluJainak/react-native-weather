import React from "react";
import { Text, Button, StyleSheet, TextInput } from "react-native"; // Import Text component
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useState } from "react";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ffff", "#3b5998", "#192f6a"], // Fix typo in the first color value
    title: "Amazing weather",
    description: "Go for a walk, stop staying at home!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141e30", "#243b55"],
    title: "Sit at home",
    description: "Do you see what's on the street?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Take an umbrella",
    description: "Perhaps the rain will increase soon",
  },
  Rain: {
    iconName: "weather-poring",
    gradient: ["#000046", "#1cb5e0"],
    title: "It's raining outside",
    description: "So there will be a rainbow soon!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "There's snow outside!",
    description: "Dress warmly, make snowmen",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#b79891", "#94716b"],
    title: "Dusty",
    description: "Better close the windows",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "On the street smog : (",
    description: "I do not advise going out unnecessarily",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3e5151", "#decba4"],
    title: "There's snow outside!",
    description: "Dress warmly, make snowmen",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You can't see a damn thing in the fog",
    description: "Do you see what's on the street?",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "The clouds",
    description: "Go for a walk, stop staying at home!",
  },
};

const Weather = ({ temp, name, condition, setWeather }) => {
  const [query, setQuery] = useState("");
  if (!weatherOptions[condition]) {
    return null; // or handle the case where condition is not valid
  }

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.mainContainer}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <View style={styles.flex}>
          <Text style={styles.temp}>{`${temp}`}°</Text>
          <Text style={styles.temp}> | {`${name}`}</Text>
        </View>
      </View>
      <View style={{ ...styles.container, ...styles.textContainer }}>
        <Text style={styles.title}>{`${weatherOptions[condition].title}`}</Text>
        <Text
          style={styles.description}
        >{`${weatherOptions[condition].description}`}</Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="City"
            style={styles.input}
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <Button
            title="Search..."
            style={styles.btn}
            onPress={() => setWeather(query)}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Weather;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "left",
  },
  searchContainer: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    marginTop: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  input: {
    width: "70%",
  },
  btn: {
    width: "30%",
    backgroundColor: "#",
  },
});
