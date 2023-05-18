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
  
  const [randombackground, setRandomBackground] = useState("#ffffff")

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
    <StatusBar backgroundColor={'#00000'}/>
    <View style={[styles.container, {backgroundColor:randombackground}]}>
      <TouchableOpacity onPress={generatorColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}> Press me </Text>
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
    backgroundColor:'6A1B4D',
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionBtnTxt:{
    fontSize:20,
    color:'#FFFFFF',
   textTransform:'uppercase'
  }
});

export default App;
