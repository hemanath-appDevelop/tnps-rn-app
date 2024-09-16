import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = () => {
  return (
    <View style={{ height: "100%", width: "100%", paddingHorizontal: 16 ,backgroundColor:'#FFFFFF'}}>
      <View style={{}}>
        <Text>Welcome back!</Text>
        <Text>Please login to continue</Text>
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#F0F8FF",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderRadius: 12,
          }}
        >
          <MaterialCommunityIcons name="email" size={30} />
          <TextInput
            placeholder="Email"
            style={{
              marginLeft: 10,
              fontSize: 16,
              textTransform: "capitalize",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
  },
});

export default LoginScreen;
