import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Giphy from './src/components/giphy';


//Limit is exclusive
const getRandomNumber = limit => {
  return Math.floor(Math.random() * limit);
}


const App = () => {
  const [refreshCount, setRefreshCount] = React.useState(0);
  return (
    <View>
      <Giphy search="happy" rand={getRandomNumber(10)} />
      <Giphy search="coding" rand={getRandomNumber(10)} />
      <Giphy search="fun" rand={getRandomNumber(10)} />
      <Giphy search="puppy" rand={getRandomNumber(10)}/> 
      <Text style={styles.text}>Powered By GIPHY</Text>
      <View style={styles.buttonView}>
        <Button 
          title="refresh"
          onPress={() => {
            setRefreshCount(refreshCount+1);
            // window.location.reload();
          }}
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


