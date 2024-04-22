import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { ContextGenerate } from "../Contextfolder/Context";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { SelectList } from "react-native-dropdown-select-list";
import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../Component/FirebaseComfig";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useContext(ContextGenerate);
  const [selected, setSelected] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const ValidationForm = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const handleSignup = async () => {
    if (ValidationForm()) {
      try {
        const userCollection = selected === "Student" ? "students" : "admins";

        const userDoc = await addDoc(collection(FIREBASE_DB, userCollection), {
          email: email,
          password: password,
        });

        console.log(userDoc);

        if (selected === "Student") {
          navigation.navigate("Login");
        } else {
          navigation.navigate("Assessment");
        }
      } catch (error) {
        console.log("Login unsuccessful", error);
      }
      setIsLoading(true);
      signup(email, password)
        .then(() => {
          setIsLoading(false);
          showMessage({
            message: "Signup successful",
            type: "success",
            duration: 6000,
            position: "top",
          });
          navigation.navigate("Login");
        })
        .catch((error) => {
          setIsLoading(false);
          showMessage({
            message: error.code.toString(),
            description: "Registration failed",
            type: "danger",
            duration: 3000,
            position: "top",
          });
        });
    }
  };

  const data = [
    { key: "1", value: "Student" },
    { key: "2", value: "Admin" },
  ];

  return (
    <>
      <FlashMessage position="top" />
      <View style={[styles.container]}>
        <ImageBackground
          source={require("../assets/background.webp")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <View style={{ height: 10 }}></View>
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.inputContainer}>
            <Text style={{ color: "grey" }}>Email Address</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <FontAwesome
                name={isValidEmail(email) ? "check" : ""}
                size={15}
                color="green"
                style={styles.icon}
              />
            </View>
            {emailError ? (
              <Text style={{ color: "red" }}>{emailError}</Text>
            ) : null}
            <Text style={{ color: "grey" }}>Password</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={[styles.eyeIcon, { marginTop: 10 }]}
              >
                <FontAwesome
                  name={showPassword ? "eye" : "eye-slash"}
                  size={22}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <Text style={{ color: "red" }}>{passwordError}</Text>
            ) : null}
            <Text style={{ color: "grey" }}>Confirm Password</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={[styles.eyeIcon, { marginTop: 10 }]}
              >
                <FontAwesome
                  name={showPassword ? "eye" : "eye-slash"}
                  size={22}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            {confirmPasswordError ? (
              <Text style={{ color: "red" }}>{confirmPasswordError}</Text>
            ) : null}

            <Text style={{ fontWeight: "600", fontSize: 20 }}>User Type:</Text>
            <SelectList
              data={data}
              setSelected={setSelected}
              boxStyles={{
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 8,
                borderWidth: 1,
              }}
              search={false}
            />
            <View style={{ height: 10 }}></View>
            {isLoading ? (
              <ActivityIndicator size="large" color="#9633AA" />
            ) : (
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleSignup}
              >
                <Text style={styles.login}>Sign Up</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{ height: 40 }}></View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View
              style={{
                height: 1,
                backgroundColor: "grey",
                marginHorizontal: 5,
                width: 130,
                marginTop: 10,
              }}
            ></View>
            <Text style={{ fontSize: 15 }}> Or Signup with</Text>
            <View
              style={{
                height: 1,
                backgroundColor: "grey",
                marginHorizontal: 5,
                width: 120,
                marginTop: 10,
              }}
            ></View>
          </View>
          <View style={{ height: 40 }}></View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome
                name={"facebook"}
                size={22}
                color="#642888"
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../assets/google.jpg")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={{ height: 100 }}></View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ fontSize: 20 }}>Already have an account?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#9633AA", fontSize: 21 }}> Log In</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#9633AA",
  },
  inputContainer: {
    width: "95%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
    color: "black",
  },
  inputWithIcon: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: 10,
  },
  loginButton: {
    backgroundColor: "#9633AA",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  login: {
    color: "#fff",
    fontWeight: "bold",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  socialButton: {
    width: 180,
    padding: 15,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4,
  },
  socialIcon: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
});

export default Signup;
