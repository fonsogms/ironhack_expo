import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
const index = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyles}
      onPress={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      <Text style={styles.buttonTextStyles}>Press</Text>
    </TouchableOpacity>
  );
};

export default index;
