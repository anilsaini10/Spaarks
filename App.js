import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
import axios from "axios";

export default function App() {

  const [allProducts, setAllProducts] = useState([]);

  const getAllData = () => {

    let url = "https://fakestoreapi.com/products";

    axios.get(url).then((res) => {
      res = res.data;
      setAllProducts(res);
    })


  }

  useEffect(() => {
    getAllData();
  }, [])

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text style={styles.heading} >Shopping</Text>

      <FlatList
        data={allProducts}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Card productDetails={item} />
        )}
      />

      <View style={{ marginTop: "10%" }} ></View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  heading: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    alignSelf: "center",
    marginTop: "20%",
    marginBottom: "5%"
  }

})