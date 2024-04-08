
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';

import { MaterialIcons } from '@expo/vector-icons';

const CryptoInfo = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [page, setPage] = useState(1); // página inicial
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
      );
      setCryptoData((prevData) => [...prevData, ...response.data]);
      setPage((prevPage) => prevPage + 1); // atualiza o número da página
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const renderCryptoItem = ({ item }) => (
    <View style={styles.cryptoItem}>
      <Image source={{ uri: item.image }} style={styles.cryptoImage} />
      <View style={styles.cryptoInfo}>
        <Text style={styles.cryptoName}>{item.name}</Text>
        <Text style={styles.cryptoSymbol}>{item.symbol.toUpperCase()}</Text>
        <Text style={styles.cryptoPrice}>Preço: ${item.current_price}</Text>
        <Text style={styles.cryptoChange}>Variação 24h: {item.price_change_percentage_24h}%</Text>
      </View>
    </View>
  );

  const handleEndReached = () => {
    if (!loading) {
      fetchData();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Criptomoedas</Text>
      <FlatList
        data={cryptoData}
        keyExtractor={(item) => item.id}
        renderItem={renderCryptoItem}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1} // define a porcentagem do fim da lista que dispara a função onEndReached
      />
      <TouchableOpacity style={styles.button}>
        <Link href={"/change"}>
          <MaterialIcons name="currency-exchange" size={40} color="white" />
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cryptoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
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
    fontWeight: 'bold',
  },
  cryptoSymbol: {
    fontSize: 16,
    color: '#666',
  },
  cryptoPrice: {
    fontSize: 16,
    marginTop: 5,
  },
  cryptoChange: {
    fontSize: 16,
    color: (change) => (change > 0 ? 'green' : 'red'),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue",
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    bottom: 0,
    right: (Dimensions.get('screen').width / 2) - 30
  },
  textButton: {
    color: "#fff"
  }
});

export default CryptoInfo;
