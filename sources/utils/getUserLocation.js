import * as Location from "expo-location";

export default async function getUserLocation() {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if(status !== "granted") return;
    const userLocation = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = userLocation.coords;
    return await new Promise.resolve({latitude, longitude});
  } catch (error) {
    return new Promise.reject(error);
  }
}