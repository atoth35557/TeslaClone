import React from "react";
import { View, StyleSheet, ImageBackground, Text,Dimensions } from "react-native";
import CustomButton from "./CustomButton";

const styles = StyleSheet.create({
  CarContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.CarContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}{" "}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Presed cus order");
          }}
        />

        <CustomButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Presed Existing Inventory");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
