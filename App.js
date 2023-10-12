import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View style={style.mainview}>
        <Text style={style.mainText}>React-native example with Redux</Text>
      </View>
      <View>
        <TextInput style={{borderWidth:1,height:40,width:'90%',margin:10,padding:10}}>

        </TextInput>
      </View>
    </SafeAreaView>
  )
}

export default App;

const style = StyleSheet.create({
  mainview: {
    justifyContent: 'center', alignContent: 'center', alignSelf: 'center'
  },
  mainText: {
    fontSize:22,
    fontWeight:'500'
  }
})