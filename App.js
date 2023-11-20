import { Alert, StyleSheet } from "react-native";
import Weather from "./components/Weather";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "63c41566f4e1ce4f706125c778bbc69a";

export default function App() {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      setLocation(data);
    } catch (error) {
      Alert.alert("I can't find your current location, so bad):");
    }
  };

  const setWeather = async (query) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      setLocation(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Handle the error, perhaps show an alert to the user
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <Weather
      setWeather={setWeather}
      temp={location?.main?.temp}
      name={location?.name}
      condition={location?.weather?.[0]?.main}
    />
  );
}

const styles = StyleSheet.create({});
