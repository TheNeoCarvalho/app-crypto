import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const ChangeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Segunda Tela</Text>
      <TouchableOpacity style={styles.button}>
            <Link href="/">
                <Ionicons name="chevron-back-circle-outline" size={40} color="white" />
            </Link>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue",
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    bottom: 10,
    right: (Dimensions.get('screen').width / 2) - 30
  },
  textButton: {
    color: "#fff"
  }
});

export default ChangeScreen