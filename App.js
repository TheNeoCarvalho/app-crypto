// App.js
import React from 'react';
import CryptoInfo from './app/index'; // Sua primeira tela
import ChangeScreen from './app/change'; // Sua segunda tela
import { NativeRouter, Route } from 'expo-router';

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={CryptoInfo} />
      <Route exact path="/change" component={ChangeScreen} />
    </NativeRouter>
  );
};

export default App;