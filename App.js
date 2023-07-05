import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './sources/screens/HomeScreen';
import SearchScreen from './sources/screens/SearchScreen';
import ForecastScreen from './sources/screens/ForecastScreen';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            elevation: 0
          },
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 65,
            paddingBottom: 8
          },
          tabBarItemStyle: {
            paddingTop: 8
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold"
          },
          tabBarActiveTintColor: "#1d4ed8",
          tabBarInactiveTintColor: "#94a3b8",
          tabBarHideOnKeyboard: true
        }}
      >
        <Tab.Screen
          name="Overview"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="partly-sunny-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Forecast"
          component={ForecastScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}