import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

const Cybersecurity = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="arrow-left" type="material-community" />
      </View>
      <Text style={styles.text}>Cyber Security</Text>
      <View style={{ marginTop: 20 }}>
        <Image
          source={require("./assets/cyberimg.png")}
          style={{ height: 180, width: 380, borderRadius: 10 }}
        />
      </View>
      <ScrollView horizontal={true} style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "Poppins_100Thin_Italic" }}> Overview</Text>
        <Text> Courese</Text>
        <Text> Mentor</Text>
        <Text> Roadmap</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    // backgroundColor: "yellow",
    fontWeight: "bold",
  },
});

export default Cybersecurity;

// import { View, Text } from "react-native";
// import { Icon } from "react-native-elements";
// import React from "react";

// export default function Cybersecurity() {
//   return (
//     <View>
//       <View style={{ margin: 20 }}>
//         <Icon name="arrow-left" type="material-community" />
//         <Text>Cyber Security</Text>
//       </View>
//     </View>
//   );
// }
