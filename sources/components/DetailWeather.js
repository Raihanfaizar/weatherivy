import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import getUnit from "../utils/getUnit";

export default function DetailWeather({ data }) {
  const [tempUnit, setTempUnit] = React.useState("celsius");

  function changeTempUnitHandler() {
    if (tempUnit === "celsius") {
      setTempUnit("fahrenheit");
    } else {
      setTempUnit("celsius");
    }
  }

  return (
    <View style={styles.component}>
      <View style={styles.header}>
        <View style={styles.location}>
          <Ionicons name="location-sharp" size={30} color="#1e293b" />
          <Text style={styles.locationText}>{data?.name === "Cileungsir" ? "Cileungsi" : data?.name}</Text>
        </View>
        <Pressable style={styles.swapUnit} onPress={changeTempUnitHandler}>
          <Ionicons name="swap-horizontal" size={30} color="#1e293b" />
        </Pressable>
      </View>
      <View style={styles.information}>
        <View>
          <Image style={styles.icon} source={
            { uri: `https://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png` }
          } />
        </View>
        <Text style={styles.unit}>
          {getUnit(tempUnit, data?.main.temp)}
        </Text>
        <View style={styles.informationBox}>
          <Text style={styles.informationMain}>
            {data?.weather[0].main}
          </Text>
          <Text style={styles.informationDesc}>
            {data?.weather[0].description
            .charAt(0).toUpperCase()
            .concat(data?.weather[0].description.slice(1))
            }
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
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
  information: {
    gap: 32,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 200,
    height: 200,
  },
  unit: {
    fontSize: 60,
    color: "#1d4ed8",
    fontWeight: "bold",
  },
  informationBox: {
    gap: 8,
    alignItems: "center",
  },
  informationMain: {
    fontSize: 30,
    color: "#1e293b",
    fontWeight: "500",
  },
  informationDesc: {
    fontSize: 20,
    color: "#1e293b",
  },
});
