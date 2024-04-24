import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

export default function Settingscreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 0,
            marginLeft: 10,
            marginTop: 45,
          }}
        >
          <Icon
            name="chevron-left"
            type="material-community"
            color={"black"}
            size={32}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text
            style={{
              fontSize: 24,
              marginLeft: 40,
              marginTop: 45,
              fontWeight: "700",
              color: "#1d1d1d",
            }}
          >
            Settings
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginHorizontal: 24,
            fontSize: 15,
            fontWeight: "500",
            color: "#929292",
          }}
        >
          update your preferences here
        </Text>
        <Text
          style={{
            marginTop: 15,
            marginHorizontal: 24,
            fontSize: 15,
            fontWeight: "500",
            color: "#929292",
          }}
        >
          PREFERENCESE
        </Text>
      </View>
      <View style={{ backgroundColor: "white", marginTop: 4 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomColor: "#929292",
            borderBottomWidth: 0.5,
          }}
        >
          <View
            style={{ flexDirection: "row", gap: 10, padding: 5, margin: 10 }}
          >
            <Icon name="web" />
            <Text>Language</Text>
          </View>
          <TouchableOpacity style={{ flexDirection: "row", margin: 10 }}>
            <Text>English</Text>
            <Icon name="chevron-right" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 0.5,
            borderBottomColor: "#929292",
          }}
        >
          <View
            style={{ flexDirection: "row", gap: 10, padding: 5, margin: 10 }}
          >
            <Icon name="brightness-4" />
            <Text>Dark Mode</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.help}>
            <Icon name="person" />
            <Text>Edit Profile</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Editscreen")}>
            <Icon style={{ margin: 15 }} name="chevron-right" />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          marginTop: 15,
          marginHorizontal: 24,
          fontSize: 15,
          fontWeight: "500",
          color: "#929292",
        }}
      >
        HELP
      </Text>
      <View style={{ backgroundColor: "white", marginTop: 4 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.help}>
            <Icon name="email" />
            <Text>Contact Us</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Editscreen")}>
            <Icon style={{ margin: 15 }} name="chevron-right" />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          marginTop: 15,
          marginHorizontal: 24,
          fontSize: 15,
          fontWeight: "500",
          color: "#929292",
        }}
      >
        ACCOUNT
      </Text>
      <View style={{ backgroundColor: "white", marginTop: 4 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.5,
            borderBottomColor: "#929292",
          }}
        >
          <View
            style={{ flexDirection: "row", gap: 10, padding: 5, margin: 10 }}
          >
            <Icon name="person" />
            <Text>Add Account</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Editscreen")}>
            <Icon style={{ margin: 15 }} name="chevron-right" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.help}>
            <Icon name="logout" />
            <Text>Logout</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Getstarted")}>
            <Icon style={{ margin: 15 }} name="chevron-right" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 0.5,
    flexDirection: "row",
    borderBottomColor: "#929292",
    margin: 15,
    gap: 10,
    padding: 5,
  },
  help: {
    flexDirection: "row",
    margin: 15,
    gap: 10,
    padding: 5,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "red",
//     paddingTop: 12,
//   },
// });

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Switch,
// } from "react-native";
// import React, { useState } from "react";
// import { Icon } from "react-native-elements";
// import { useColorScheme } from "nativewind";

// // const Settings = ({ navigation }) => {
// //   return (
// //     <View
// //       style={{
// //         marginHorizontal: 12,
// //         flexDirection: "row",
// //         justifyContent: "center",
// //       }}
// //     ></View>
// //   );
// // };

// const SECTIONS = [
//   {
//     header: "preferences",
//     items: [
//       { id: "language", icon: "web", label: "Language", type: "select" },
//       {
//         id: "darkMode",
//         icon: "brightness-4",
//         label: "Dark Mode",
//         type: "toggle",
//         // type: "material-community",
//       },
//       {
//         id: "profile",
//         icon: "person",
//         label: "Edit profile",
//         type: "select",
//       },
//       // { id: "wifi", icon: "wifi", label: "Use Wi-Fi", type: "toggle" },
//     ],
//   },

//   {
//     header: "Help",
//     items: [
//       { id: "contact", icon: "email", label: "Contact us", type: "Link" },
//     ],
//   },

//   {
//     header: "Account",
//     items: [
//       { id: "account", icon: "person", label: "Add account", type: "select" },
//       { id: "log out", icon: "logout", label: "Logout", type: "select" },
//     ],
//   },
// ];
// export default function Settings({ navigation }) {
//   const { colorScheme, toggleColorScheme } = useColorScheme();
//   console.log(colorScheme);
//   const [form, setForm] = useState({
//     language: "English",
//     darkMode: true,
//     // wifi: false,
//   });
//   return (
//     <View style={{}}>
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={{ position: "absolute", left: 0, marginLeft: 10, marginTop: 45 }}
//       >
//         <Icon
//           name="chevron-left"
//           type="material-community"
//           color={"black"}
//           size={32}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text
//           style={{
//             fontSize: 24,
//             marginLeft: 40,
//             marginTop: 45,
//             fontWeight: "700",
//             color: "#1d1d1d",
//           }}
//         >
//           Settings
//         </Text>
//       </TouchableOpacity>
//       <ScrollView>
//         <View style={StyleSheet.header}>
//           <Text
//             style={{
//               marginHorizontal: 24,
//               fontSize: 15,
//               fontWeight: "500",
//               color: "#929292",
//             }}
//           >
//             update your preferences here
//           </Text>
//         </View>
//         {SECTIONS.map(({ header, items }) => (
//           <View style={styles.section} key={header}>
//             <View style={styles.sectionHeader}>
//               <Text style={styles.sectionHeaderText}>{header}</Text>
//             </View>
//             <View style={styles.sectionBody}>
//               {items.map(({ label, id, type, icon }, index) => (
//                 <View
//                   style={[
//                     styles.rowWrapper,
//                     index === 0 && { borderTopWidth: 0 },
//                   ]}
//                   key={id}
//                 >
//                   <TouchableOpacity onPress={() => {}}>
//                     <View style={styles.row}>
//                       <Icon
//                         name={icon}
//                         color="#9633AA"
//                         size={32}
//                         style={{ marginRight: 12 }}
//                       />
//                       <Text style={styles.rowLabel}>{label}</Text>
//                       <View style={styles.rowSpacer} />
//                       {type === "select" && (
//                         <Text style={styles.rowValue}>{form[id]}</Text>
//                       )}
//                       {type === "toggle" && (
//                         <Switch
//                           value={colorScheme == "dark"}
//                           onValueChange={toggleColorScheme}
//                         />
//                       )}

//                       {["select", "Link"].includes(type) && (
//                         <Icon
//                           name="chevron-right"
//                           type="material-community"
//                           size={22}
//                         />
//                       )}
//                     </View>
//                   </TouchableOpacity>
//                 </View>
//               ))}
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   section: {
//     paddingTop: 12,
//     // marginBottom: 12,
//   },
//   sectionHeader: {
//     paddingHorizontal: 24,
//     paddingVertical: 8,
//   },
//   sectionHeaderText: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#a7a7a7",
//     textTransform: "uppercase",
//     letterSpacing: 1.2,
//   },
//   rowWrapper: {
//     paddingLeft: 24,
//     borderTopWidth: 1,
//     borderColor: "#e3e3e3",
//     backgroundColor: "#fff",
//   },
//   row: {
//     height: 50,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingRight: 24,
//   },
//   rowLabel: {
//     fontSize: 17,
//     fontWeight: "500",
//     color: "#000",
//   },
//   rowSpacer: {
//     flex: 1,
//   },
//   rowValue: {
//     fontSize: 17,
//     color: "#616161",
//     marginRight: 4,
//   },
// });
