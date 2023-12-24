import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import Categories from "../components/Categories";
import RecipeList from "../components/RecipeList";

const RecipeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Hello, Dude 😃"} headerIcon={"bell-o"} />
      <SearchFilter icon="search" placeholder={"enter your fav. recipe "} />
      <Categories />
      <RecipeList />
    </SafeAreaView>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({});
