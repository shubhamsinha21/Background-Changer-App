import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';




function App(): JSX.Element {
  //by writing JSX.Element, we are saying that the function only contains JSX
  //by default also, it allow only jsx
  
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")

  const generatorColor =() =>{

  }


  return (
    <>
    <StatusBar backgroundColor={'#00000'}/>
    <View style={[styles.container]}>
      <TouchableOpacity>
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
    flex:1

  },
  actionBtn:{

  },
  actionBtnTxt:{

  }
});

export default App;
