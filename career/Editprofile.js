import {
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "./Firebaseconfig";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";

export default function Editprofile({ navigation }) {
  const [profileData, setProfileData] = useState({
    name: " Rita Gakiza",
    email: "annegakiza@gmail.com",
    phone: "+250782455836",
    interests: { dancing: false, blogging: false, music: false },
    imageUri: require("./assets/Profileimg.jpg"), // Default image
  });

  const [image, setImage] = useState(
    "https://images.search.yahoo.com/search/images;_ylt=AwriiOUYmR9mDVkBlGlXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210US714G0&p=image&fr=mcafee&th=315&tw=474&imgurl=https%3A%2F%2Fcdn.photographylife.com%2Fwp-content%2Fuploads%2F2014%2F09%2FNikon-D750-Image-Samples-2.jpg&rurl=https%3A%2F%2Fphotographylife.com%2Fnikon-d750-high-resolution-image-samples&size=704KB&name=Nikon+D750+High+Resolution+Image+Samples+-+Photography+Life&oid=1&h=1365&w=2048&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPFEY6kfgxbsja6gmrW6rwHaE7%26pid%3DApi&tt=Nikon+D750+High+Resolution+Image+Samples+-+Photography+Life&sigr=rrsV2x5p1jjT&sigit=ka3Foiz8A5r4&sigi=REw8O8t3tckg&sign=L2QwBpV6gAWS&sigt=L2QwBpV6gAWS"
  );
  const [uriLink, setUriLink] = useState("");

  const handleEditProfile = () => {
    // Navigate to the edit profile screen
    // navigation.navigate("EditProfileScreen");
  };

  const handleInterestClick = (interest) => {
    setProfileData({
      ...profileData,
      interests: {
        ...profileData.interests,
        [interest]: !profileData.interests[interest],
      },
    });
  };

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

  return (
    <View>
      <View style={{ backgroundColor: "#e6e6e6" }}>
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            flexDirection: "row",
            margin: 30,
            padding: 10,
            borderBottomWidth: 0.5,
          }}
        >
          <TouchableOpacity onPress={handleUploadImage}>
            <Image
              source={{ uri: image }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: "#9633AA",
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            >
              <Icon
                name="camera"
                type="material-community"
                color={"white"}
                size={32}
              />
            </View>
          </TouchableOpacity>

          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {profileData.name}
            </Text>
            <Text>{profileData.email}</Text>
            <Text>{profileData.phone}</Text>
          </View>
          <TouchableOpacity
            style={{ flexDirection: "row", borderColor: "#9633AA" }}
            onPress={handleEditProfile}
          >
            <Icon
              onPress={() => navigation.navigate("Editscreen")}
              name="pencil-outline"
              type="material-community"
              color={"#9633AA"}
            />
            <Text style={{ color: "#9633AA" }}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 10, marginTop: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>About</Text>
          <Text>Lives in Rwanda</Text>
          <Text>Education: 12th- science</Text>
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Interest</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <TouchableOpacity
              style={[
                styles.interestButton,
                profileData.interests.dancing && styles.clickedInterest,
              ]}
              onPress={() => handleInterestClick("dancing")}
              // onPress={}
            >
              <Text style={styles.interestText}>Dancing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.interestButton,
                profileData.interests.blogging && styles.clickedInterest,
              ]}
              onPress={() => handleInterestClick("blogging")}
            >
              <Text style={styles.interestText}>Blogging</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.interestButton,
                profileData.interests.music && styles.clickedInterest,
              ]}
              onPress={() => handleInterestClick("music")}
            >
              <Text style={styles.interestText}>Music</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>My journey</Text>
          <Icon name="arrow-top-right" type="material-community" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>My appointments</Text>
          <Icon name="arrow-top-right" type="material-community" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Scholarships</Text>
          <Icon name="arrow-top-right" type="material-community" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Help & FAQs</Text>
          <Icon name="arrow-top-right" type="material-community" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
          <Icon name="arrow-top-right" type="material-community" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  interestButton: {
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#ffcc00",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  interestText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  clickedInterest: {
    backgroundColor: "#e67300",
  },
  menuItem: {
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
  },
  menuText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
