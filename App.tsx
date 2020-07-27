import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PomApp } from "./src/PomApp";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <PomApp />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
