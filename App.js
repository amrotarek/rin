import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import MessagePage from './MessagesPage';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <ImageBackground 
      source={require("./assets/nn.jpg")} 
      resizeMode="cover" 
      style={{ flex:1 }} 
      blurRadius={7}
    >
      <View style={{paddingTop:50, paddingLeft:20}}>

        <MessagePage />
      </View>
    </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
