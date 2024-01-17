import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

const App = () => {
  const [textInputs, setTextInputs] = useState([]);

  const addTextInput = () => {
    setTextInputs([...textInputs, '']);
  };

  const handleTextChange = (text, index) => {
    const updatedInputs = [...textInputs];
    updatedInputs[index] = text;
    setTextInputs(updatedInputs);
  };

  return (
    <ScrollView style= {{backgroundColor: 'white'}}>
    <View style={{width: 300,
       height: 300,backgroundColor: 'white'}}>
    <View style={{flex:1, backgroundColor: 'white'}}>
     <Image 
      source={require('../assets/logo.png')}
      style={{
       width: "19%",
       height: "25%",
       resizeMode: "contain",
       marginHorizontal:135,
       backgroundColor: 'white'
      
       }}>
      </Image>
      <Text style={{fontFamily:'Brush Script std',fontSize:31, backgroundColor: 'white'}}>Notes</Text>

      <TouchableOpacity style={{
              width: 65,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:'white'}}
               onPress={addTextInput}>
               
        <Image 
      source={require('../assets/button.png')}
      style={{
       width: "100%",
       height: "100%",
       resizeMode: "contain",
       backgroundColor: 'white'
       }}>
      </Image>
     
      </TouchableOpacity>
      {textInputs.map((value, index) => (
        <TextInput
          key={index}
          style={{ backgroundColor:'#FFECB2',  borderRadius:30, marginLeft:10,borderWidth:5, borderColor:'#FFE69B', padding: 10, marginTop: 10}}
          placeholder={`Enter text ${index + 1}`}
          value={value}
          onChangeText={(text) => handleTextChange(text, index)}
        />
      ))}
      </View>
    </View>
    </ScrollView>
  );
};

export default App;


