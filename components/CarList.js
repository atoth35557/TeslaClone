import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "./CarItem";
import cars from "./cars";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarList;
