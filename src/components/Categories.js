import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoriesFilter from "./CategoriesFilter";

const Categories = () => {
  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
      <CategoriesFilter />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
