import React from "react";
import { StyleSheet, Text, View } from "react-native";
const App = () => {
  return (
    < View style={styles.container}>
      <View style={styles.cc}>
        <Text> REEM My first tu; </Text>
        <Text></Text>
        <View style={styles.mm}></View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  cc: {
    width: 300,
    height: 300,
    borderWidth: 2,
    backgroundColor: 'white',
    marginLeft: 50,
    marginTop: 50,
    
  },
  mm: {
    width: 100,
    height: 100,
    borderWidth: 0,
    backgroundColor: 'pink',
    marginLeft: 10,
    marginTop: 50,
    textDecorationColor: 'black',


  },

})


export default App;   