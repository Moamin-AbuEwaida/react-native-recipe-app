import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const RecipeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Hello, Dude 😃"} headerIcon={"bell-o"} />
    </SafeAreaView>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({});
