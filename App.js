import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const API_KEY = "Tyiskjc69fbO2GtmKoB2xUd0AqHxAl4k";
const LIMIT = 10;
//Limit is exclusive
const getRandomNumber = limit => {
  return Math.floor(Math.random() * limit);
}

const Giphy = ({search}) => {
  const [imgSrc, setImgSrc] = React.useState("");

  const searchForGif = evt => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${LIMIT}&q=${search}`;
    fetch(url)
    .then(response => response.json())
    .then(json => {
      setImgSrc(json[getRandomNumber(json.length)]);
    });
  }
  
  return (
    <View>
      <Image source={imgSrc}/>
      <Text>Powered By GIPHY</Text>
    </View>
  )
}

const App = () => {
  return (
    <View>
      <Giphy search="coding" />
      <Giphy search="fun" />
      <Giphy search="puppy" /> 
    </View>
  );
}

export default App;