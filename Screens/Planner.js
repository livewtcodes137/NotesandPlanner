import React, { Component } from 'react';
import { Text, View, Stylesheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

export default class Planner extends Component {
  render () {
    return (
      <ScrollView style = {{backgroundColor: 'white'}}>
      <View >
     
      <Image 
      source={require('../assets/logo.png')}
      style={{
       width: "100%",
       height: "9.999%",
       resizeMode: "contain",
       backgroundColor:'white'
       }}>
      </Image>
      <Text style={{fontFamily:'Brush Script std',fontSize:31, backgroundColor:'white'}}>Planner</Text>
      <TextInput style={{width:320, height:75, borderWidth:5, borderColor:'#FFE69B'}}>
      </TextInput>
      <TextInput style={{width:320, height:75,  borderWidth:5, borderColor:'#FFE69B',marginTop:5 }}>
      </TextInput>
      <TextInput style={{width:320, height:75, borderWidth:5, borderColor:'#FFE69B',marginTop:5 }}>
      </TextInput>
      <TextInput style={{width:320, height:75, borderWidth:5, borderColor:'#FFE69B',marginTop:5}}>
      </TextInput>
      <TextInput style={{width:320, height:75, borderWidth:5, borderColor:'#FFE69B',marginTop:5 }}>
      </TextInput>
      <TextInput style={{width:320, height:75, borderWidth:5, borderColor:'#FFE69B',marginTop:5 }}>
      </TextInput>
      <TextInput style={{width:320, height:75, borderWidth:5, borderColor:'#FFE69B',marginTop:5 }}>
      </TextInput>
    

      </View>
      </ScrollView>
    )
  }
}

