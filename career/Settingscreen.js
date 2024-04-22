import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const Settings = ({ navigation }) => {
  return (
    <View
      style={{
        marginHorizontal: 12,
        flexDirection: "row",
        justifyContent: "center",
      }}
    ></View>
  );
};

export default function Settingscreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          left: 0,
          margin: 10,
        }}
      >
        <Icon
          name="chevron-left"
          type="material-community"
          color={"black"}
          size={32}
        />
      </TouchableOpacity>

      {/* <Text style={{ textAlign: "center", fontSize: 32 }}>Settingscreen</Text> */}
    </View>
  );
}
