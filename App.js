import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

const API_KEY = "Tyiskjc69fbO2GtmKoB2xUd0AqHxAl4k";
const LIMIT = 10;
//Limit is exclusive
const getRandomNumber = limit => {
  return Math.floor(Math.random() * limit);
}


const Giphy = ({search}) => {
  const [uri, setUri] = React.useState("");
  React.useEffect(() => {
    getUri();
  });

  const getUri = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${LIMIT}&q=${search}`)
    .then(response => response.json())
    .then(json => {
      setUri(json.data[getRandomNumber(json.data.length)].images.downsized_medium.url);
    });
  }
  console.log("render");
  return (
    <View>
      <Image style={styles.image} source={{uri: uri}}/>
    </View>
  )
}


const App = () => {
  const [refreshCount, setRefreshCount] = React.useState(0);
  return (
    <View>
      <Giphy search="happy" />
      <Giphy search="coding" />
      <Giphy search="fun" />
      <Giphy search="puppy" /> 
      <Text style={styles.text}>Powered By GIPHY</Text>
      <View style={styles.buttonView}>
        <Button 
          title="refresh"
          onPress={() => {setRefreshCount(refreshCount+1)}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    alignSelf: "center",
    margin: 2
  },
  text: {
    textAlign: "center"
  },
  buttonView: {
    width: 175,
    alignSelf: "center"
  }


});




export default App;


