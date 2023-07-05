import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import API from "../data/api.json";
import getUserLocation from "../utils/getUserLocation";
import LoadingScreen from "./LoadingScreen";
import ForecastWrapper from "../components/ForecastWrapper";
import { Ionicons } from "@expo/vector-icons";

export default function ForecastScreen() {
  const [tempUnit, setTempUnit] = React.useState("celsius");
  const [forecastWeather, setForecastWeather] = React.useState(null);

  function changeTempUnitHandler() {
    if (tempUnit === "celsius") {
      setTempUnit("fahrenheit");
    } else {
      setTempUnit("celsius");
    }
  }

  const updateForecastWeather = async () => {
    try {
      const userLocation = await getUserLocation();
      const { latitude, longitude } = await userLocation;
      const fetching = await fetch(`${API.BASE_URL}forecast?lat=${latitude}&lon=${longitude}&cnt=10&appid=${API.KEY}&lang=id`);
      const data = await fetching.json();
      setForecastWeather(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  React.useEffect(() => {
    updateForecastWeather();
  }, []);

  return (
    <View style={styles.component}>
      <View style={styles.header}>
        <View style={styles.location}>
          <Ionicons name="location-sharp" size={30} color="#1e293b" />
          <Text style={styles.locationText}>{forecastWeather?.city.name === "Cileungsir" ? "Cileungsi" : forecastWeather?.city.name}</Text>
        </View>
        <Pressable style={styles.swapUnit} onPress={changeTempUnitHandler}>
          <Ionicons name="swap-horizontal" size={30} color="#1e293b" />
        </Pressable>
      </View>
      <ScrollView>
        {
          forecastWeather
          ? <ForecastWrapper dataWeather={forecastWeather} tempUnit={tempUnit} />
          : <LoadingScreen/>
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  location: {
    gap: 4,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  locationText: {
    fontSize: 30,
    color: "#1e293b",
    fontWeight: "bold",
  },
  swapUnit: {
    padding: 12
  },
});