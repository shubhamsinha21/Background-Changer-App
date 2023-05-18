import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';




function App(): JSX.Element {
  //by writing JSX.Element, we are saying that the function only contains JSX
  //by default also, it allow only jsx
  
  const [randomBackground, setRandomBackground] = useState("#ffffff")

  const generatorColor =() =>{
   const hexRange = '0123456789ABCDEF'
   let color='#'
   for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random() * 16)];
   }

   setRandomBackground(color)
  }


  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container, {backgroundColor:randomBackground}]}>
    <View style={styles.rectangle}>
      <View style={[styles.square, {backgroundColor:randomBackground}]}></View>
      <View style={[styles.circle, {backgroundColor:randomBackground}]}></View>
    </View>
      <TouchableOpacity onPress={generatorColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}> Change color !</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionBtn:{
    borderRadius:20,
    backgroundColor:'#6A1B4D',
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionBtnTxt:{
    fontSize:20,
    color:'#ffffff',
   textTransform:'uppercase'
  },
  rectangle:{
    width:380,
    height:200,
    backgroundColor:'#6A1B4D',
    marginBottom:100,
    marginTop:-100,
    flexDirection:'row',
    alignItems:'center',
  },
  square:{
    width:120,
    height:120,
    margin:40,
  },
  circle:{
    width:120,
    height:120,
    borderRadius:100
  }
});

export default App;
