import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PomTask from "./components/PomTask";
import PomTimer from "./components/PomTimer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const PomApp = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="PomTask">
            <Stack.Screen
              name="PomTask"
              component={PomTask}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PomTimer"
              component={PomTimer}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};
