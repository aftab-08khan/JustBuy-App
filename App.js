import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screen/HomeScreen";
import SearchScreen from "./screen/SearchScreen";
import CategoriesScreen from "./screen/CategoriesScreen";
import CartScreen from "./screen/CartScreen";
import WishListScreen from "./screen/WishListScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WishListScreen"
            component={WishListScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
