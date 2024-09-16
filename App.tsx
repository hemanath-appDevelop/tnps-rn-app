import React from "react";
import { View, Text } from "react-native";

import LoginScreen from "./src/screens/Login/loginScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;
