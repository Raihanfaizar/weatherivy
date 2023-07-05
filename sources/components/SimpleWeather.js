import { StyleSheet, Text, View, Image } from "react-native";
import dayjs from "dayjs";

export default function SimpleWeather({ icon, temp, date, desc }) {
  return (
    <View style={styles.component}>
      <Image style={styles.icon} source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} />
      <View style={styles.information}>
        <Text style={styles.temp}>{temp} {desc}</Text>
        <Text style={styles.date}>{dayjs(date).format("HH:mma D MMMM YYYY")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 75,
    height: 75,
  },
  information: {
    flex: 2
  },
  temp: {
    fontSize: 20,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  desc: {
    fontSize: 16,
    textTransform: "capitalize",
  },
  date: {
    fontSize: 14
  }
});
