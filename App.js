import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Tugas 2 Prak DPM</Text>

      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: "#FF5733" }]} />
        <View style={[styles.box, { backgroundColor: "#33FF57" }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3", // Warna abu-abu terang untuk layar
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    backgroundColor: "aqua", // Warna abu-abu terang untuk latar belakang teks
    padding: 10, // Menambahkan padding di sekitar teks
    borderRadius: 5, // Membuat sudut latar belakang teks sedikit melengkung
    textAlign: "center", // Menjaga teks tetap di tengah latar belakang
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%", // Memberikan lebar untuk tata letak horizontal
    marginTop: 20, // Menambahkan jarak antara teks dan kotak
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default App;
