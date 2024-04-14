import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BasketballMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('http://api.balldontlie.io/v1/games', {
          headers: {
            'Authorization': '9d50abc8-8ab9-4e18-8816-ae42a96c0bd0', // Substitua YOUR_API_KEY pela sua chave de API
          },
        });
        connsole.log(response);
        setMatches(response.data.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Partidas de Basquete</Text>
      {matches.map((match, index) => (
        <View key={index} style={styles.match}>
          <Text>Data: {match.date}</Text>
          <Text>Equipe da Casa: {match.home_team.full_name}</Text>
          <Text>Equipe Visitante: {match.visitor_team.full_name}</Text>
          <Text>Placar: {match.home_team_score} - {match.visitor_team_score}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  match: {
    marginBottom: 10,
  },
});

export default BasketballMatches;
