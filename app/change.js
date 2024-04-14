import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const ChangeScreen = () => {
  const [baseAmount, setBaseAmount] = useState("");
  const [btcAmount, setBtcAmount] = useState("");
  const [ethAmount, setEthAmount] = useState("");
  const [usdAmount, setUsdAmount] = useState("");
  const [eurAmount, setEurAmount] = useState("");

  const convertCurrency = () => {
    // Implementação da conversão de moeda aqui
    // Aqui você usaria uma API de conversão de moeda para calcular os valores
    // Neste exemplo, apenas exibiremos o valor da moeda base nas outras moedas
    setBtcAmount(baseAmount * 0.0000028); // Supondo que 1 BRL = 0.000021 BTC
    setEthAmount(baseAmount * 0.0000648); // Supondo que 1 BRL = 0.000648 ETH
    setUsdAmount(baseAmount * 0.2); // Supondo que 1 BRL = 0.19 USD
    setEurAmount(baseAmount * 0.18); // Supondo que 1 BRL = 0.16 EUR
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.text}>Conversão de Moeda</Text>
      <TextInput
        placeholder="Insira o valor em BRL"
        keyboardType="numeric"
        value={baseAmount}
        onChangeText={setBaseAmount}
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "gray",
          width: "90%",
          fontSize: 20,
        }}
      />
      <TouchableOpacity
        onPress={convertCurrency}
        style={{
          backgroundColor: "blue",
          width: "90%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 8,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Converter
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: "90%",
          paddingVertical: 8,
          marginVertical: 8,
        }}
      >
        <Text style={styles.textConvert}>Bitcoin (BTC): {btcAmount}</Text>
        <Text style={styles.textConvert}>Ethereum (ETH): {ethAmount}</Text>
        <Text style={styles.textConvert}>
          Dólar Americano (USD): {usdAmount}
        </Text>
        <Text style={styles.textConvert}>Euro (EUR): {eurAmount}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Link href={"/"}>
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cryptoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  cryptoImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cryptoInfo: {
    flex: 1,
  },
  cryptoName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cryptoSymbol: {
    fontSize: 16,
    color: "#666",
  },
  cryptoPrice: {
    fontSize: 16,
    marginTop: 5,
  },
  cryptoChange: {
    fontSize: 16,
    color: (change) => (change > 0 ? "green" : "red"),
  },
  text: {
    fontSize: 30,
  },
  textConvert: {
    fontSize: 22,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
    bottom: 0,
    right: Dimensions.get("screen").width / 2 - 30,
  },
  textButton: {
    color: "#fff",
  },
});

export default ChangeScreen;
