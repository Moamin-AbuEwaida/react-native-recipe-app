import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  return (
    <View style={{ marginTop: 22, flex: 1 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
      <RecipeCard />
    </View>
  );
};

export default RecipeList;

const styles = StyleSheet.create({});
