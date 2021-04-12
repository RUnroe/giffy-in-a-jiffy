import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const API_KEY = "Tyiskjc69fbO2GtmKoB2xUd0AqHxAl4k";
const LIMIT = 10;
//Limit is exclusive
const getRandomNumber = limit => {
  return Math.floor(Math.random() * limit);
}

class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: ""
    };
  }

  componentDidMount() {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${LIMIT}&q=${this.props.search}`;
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        imgSrc: json[getRandomNumber(json.length)]
      });
    });
  }
  render() {
    return (
      <View>
        <Image source={this.state.imgSrc}/>
        <Text>Powered By GIPHY</Text>
      </View>
    )
  }
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