import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Image, View } from "react-native";
import PrimaryButton from "./components/PrimaryButton/index";
export default function App() {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState("InputText");
  return (
    <View style={{ ...styles1 }}>
      <View
        style={{
          backgroundColor: "yellow",
          flex: 0.4,
          justifyContent: "center",
          alignItems: "center",
          //flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 50, color: "purple" }}>{counter}</Text>
      </View>
      <PrimaryButton setCounter={setCounter} counter={counter} />
      <TextInput
        onFocus={() => {
          console.warn("its focused");
        }}
        value={inputText}
        autoFocus
        onChangeText={(text) => {
          console.log(text);
          setInputText(text);
        }}
        style={{
          backgroundColor: "green",
          marginTop: 10,
          height: 30,
          width: "50%",
          alignSelf: "center",
        }}
      ></TextInput>

      <Text style={{ textAlign: "center", color: "white", fontSize: 40 }}>
        {inputText}
      </Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: "https://reactjs.org/logo-og.png" }}
      ></Image>
      <Image
        style={{ width: 300, height: 300 }}
        source={require("./assets/splash.png")}
      ></Image>
    </View>
  );
}
const styles1 = { backgroundColor: "red", flex: 1 };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
