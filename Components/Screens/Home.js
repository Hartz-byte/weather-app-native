import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Home = () => {
  const [city, setCity] = useState("");

  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/image2.jpg")}
        style={{ height: "100%", width: "100%" }}
        imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
      />

      <View
        style={{
          position: "absolute",
          paddingVertical: 30,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "77%",
          }}
        >
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require("../../assets/images/user.jpg")}
            style={{ height: 46, width: 46, borderRadius: 50 }}
          />
        </View>

        <View style={{ paddingHorizontal: 20, marginTop: 60 }}>
          <Text style={{ fontSize: 40, color: "white" }}>Hello, Harsh</Text>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Search your city...
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "white",
              width: "77%",
              height: "30%",
              marginTop: 20,
            }}
          >
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}
              placeholder="Search city"
              placeholderTextColor="white"
              style={{ paddingHorizontal: 10, color: "white", fontSize: 16 }}
            />
            <TouchableOpacity onPress={() => {}} style={{ marginRight: 10 }}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 22,
              paddingHorizontal: 10,
              top: 40,
            }}
          >
            My Current location
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
