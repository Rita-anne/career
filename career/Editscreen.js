import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { addDoc, collection } from "firebase/firestore";
import { FIREBASE_DB } from "./Firebaseconfig";
import {
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { storage } from "./Firebaseconfig";

export default function Editscreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(
    "https://tse3.mm.bing.net/th?id=OIP.Jp5f9CdAk7o0IUkVBSMgzgHaE8&pid=Api&P=0&h=220"
  );
  const [uriLink, setUriLink] = useState("");

  const handleUploadImage = async () => {
    try {
      await requestMediaLibraryPermissionsAsync();
      const result = await launchImageLibraryAsync({
        aspect: [1, 1],
        allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: true,
      });
      if (!result.canceled) {
        console.log(result);
        setImage(result.assets[0].uri);
        handlePost(result.assets[0].uri);
      }
    } catch (error) {}
  };
  const handlePost = async (img) => {
    try {
      if (!img) {
        alert("image is required");
      } else {
        const timestamp = Date.now();
        const fileExtention = img.split(".").pop();
        var response = await fetch(img);
        var Blob = await response.blob();

        const storagePath = `profile/${timestamp}`;
        console.log(storagePath);
        const metadata = { contentType: `image/jpeg` };

        const imageRef = ref(storage, storagePath);
        const upload = await uploadBytes(imageRef, Blob, metadata);
        console.log(upload);
        const url = await getDownloadURL(imageRef);
        console.log(url);
        setUriLink(url);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddDoc = async () => {
    try {
      const snapDoc = await addDoc(collection(FIREBASE_DB, "profile"), {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        image: image,
      });
      console.log(snapDoc);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <Text style={{ margin: 20, fontWeight: "bold", fontSize: 25 }}>Edit</Text>
      <View>
        <Pressable
          onPress={handleUploadImage}
          style={{
            height: 200,
            margin: 10,
            width: 200,
            // backgroundColor: "red",
            alignSelf: "center",
            borderRadius: 200,
          }}
        >
          <Image
            source={{
              uri: image,
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 200,
              borderWidth: 2,
              borderColor: "#9633AA",
            }}
          />
        </Pressable>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 140,
            zIndex: 9999,
          }}
        >
          <Icon
            name="camera"
            type="material-community"
            color={"black"}
            size={35}
          />
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholderTextColor={"#C7C7C7"}
          placeholder="your Name.."
          textColor="black"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholderTextColor={"#C7C7C7"}
          placeholder="your Email.."
          textColor="black"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholderTextColor={"#C7C7C7"}
          placeholder="your phone number.."
          textColor="black"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <TouchableOpacity onPress={handleAddDoc}>
        <Text
          onPress={() => navigation.navigate("Editprofile")}
          style={{
            backgroundColor: "#9633AA",
            color: "white",
            fontSize: 28,
            textAlign: "center",
            marginTop: 50,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
            padding: 10,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#9633AA",
    backgroundColor: "white",
    padding: 10,
  },
});
