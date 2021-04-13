import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Giphy from './src/components/giphy';



const App = () => {
  // const [refreshCount, setRefreshCount] = React.useState(0);
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
          onPress={() => {
            // setRefreshCount(refreshCount+1);
            window.location.reload();
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


