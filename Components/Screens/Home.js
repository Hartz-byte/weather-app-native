import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { deviceHeight, deviceWidth } from "../Domensions/Dimensions";
import Icon from "react-native-vector-icons/Ionicons";

const Home = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/image2.jpg")}
        style={{ height: deviceHeight, width: deviceHeight }}
        imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
      />

      <View style={{ position: "absolute" }}>
        <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <Icon name="menu" size={46} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
