import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";

// const Settings = ({ navigation }) => {
//   return (
//     <View
//       style={{
//         marginHorizontal: 12,
//         flexDirection: "row",
//         justifyContent: "center",
//       }}
//     ></View>
//   );
// };

const SECTIONS = [
  {
    header: "preferences",
    items: [
      { id: "language", icon: "web", label: "Language", type: "select" },
      {
        id: "darkMode",
        icon: "brightness-4",
        label: "Dark Mode",
        type: "toggle",
        // type: "material-community",
      },
      { id: "profile", icon: "person", label: "Edit profile", type: "select" },
      { id: "wifi", icon: "wifi", label: "Use Wi-Fi", type: "toggle" },
    ],
  },

  {
    header: "Help",
    items: [
      { id: "contact", icon: "email", label: "Contact us", type: "Link" },
    ],
  },

  {
    header: "Account",
    items: [
      { id: "account", icon: "person", label: "Add account", type: "select" },
      { id: "log out", icon: "logout", label: "Logout", type: "select" },
    ],
  },
];
export default function Settings({ navigation }) {
  const [form, setform] = useState({
    language: "English",
    darkMode: true,
    wifi: false,
  });
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", left: 0, marginLeft: 10, marginTop: 15 }}
      >
        <Icon
          name="chevron-left"
          type="material-community"
          color={"black"}
          size={32}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            marginLeft: 40,
            marginTop: 15,
            fontWeight: "700",
            color: "#1d1d1d",
          }}
        >
          Settings
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={StyleSheet.header}>
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
        </View>
        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ label, id, type, icon }, index) => (
                <View
                  style={[
                    styles.rowWrapper,
                    index === 0 && { borderTopWidth: 0 },
                  ]}
                  key={id}
                >
                  <TouchableOpacity onPress={() => {}}>
                    <View style={styles.row}>
                      <Icon
                        name={icon}
                        color="#9633AA"
                        size={32}
                        style={{ marginRight: 12 }}
                      />
                      <Text style={styles.rowLabel}>{label}</Text>
                      <View style={styles.rowSpacer} />
                      {type === "select" && (
                        <Text style={styles.rowValue}>{form[id]}</Text>
                      )}
                      {type === "toggle" && (
                        <Switch
                          value={form[id]}
                          onValueChange={(value) =>
                            setForm({ ...form, [id]: value })
                          }
                        />
                      )}

                      {["select", "Link"].includes(type) && (
                        <Icon
                          name="chevron-right"
                          type="material-community"
                          size={22}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 12,
    // marginBottom: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#a7a7a7",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  rowWrapper: {
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 24,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
  },
  rowSpacer: {
    flex: 1,
  },
  rowValue: {
    fontSize: 17,
    color: "#616161",
    marginRight: 4,
  },
});
