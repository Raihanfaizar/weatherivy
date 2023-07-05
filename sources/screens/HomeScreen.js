import * as React from "react";
import { StyleSheet, View } from "react-native";
import API from "../data/api.json";
import getUserLocation from "../utils/getUserLocation";
import LoadingScreen from "./LoadingScreen";
import DetailWeather from "../components/DetailWeather";

export default function HomeScreen() {
  const [currentWeather, setCurrentWeather] = React.useState(null);

  const updateCurrentWeather = async () => {
    try {
      const userLocation = await getUserLocation();
      const { latitude, longitude } = await userLocation;
      const fetching = await fetch(`${API.BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API.KEY}&lang=id`);
      const data = await fetching.json();
      setCurrentWeather(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  React.useEffect(() => {
    updateCurrentWeather();
  }, []);

  return (
    <View style={styles.component}>
      {
        currentWeather
        ? <DetailWeather data={currentWeather} />
        : <LoadingScreen/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: "white"
  }
});