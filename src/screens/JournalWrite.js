import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
// import Header from '../components/Header'
import Button from '../components/Button'
import { Image } from 'react-native';
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'
import {useDispatch, useSelector} from "react-redux";

export default function JournalWrite({ navigation }) {
  const auth = useSelector((state) => state.auth);  
  const dispatch = useDispatch();
  const [ text, setText ] = useState({ value: 'Put down your thoughts and reflections...'});

  if(!auth.user){
      return null
  }
  return (
    <Background>
      <Text style={styles.heads}>Journal</Text>
      {/* <Header>Peace</Header> */}
      <Text style={styles.description}>What are you feeling greatful for today?</Text>
      
      <TextInput
        multiline={true}
        onChangeText={(text) => setText({ value: text })}
        style={styles.textArea}
        value={text.value}/>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Journal')}>
        Save
      </Button>
      
      <TouchableOpacity
        onPress={()=>navigation.navigate('Dashboard')}>
        <Image source={require('../assets/Icons/Frame11.png')} style={styles.pause} />
      </TouchableOpacity>
    </Background>
  )
}

const styles = StyleSheet.create({
  textArea:{
    width: 283,
    height: 378,
    backgroundColor: '#ECF1F4',
    borderRadius:10,
    margin: 10
  },
  heads: {
    position: 'absolute',
    top: 50,
    fontWeight: 'bold',
    size: 40,
    lineHeight: 33,
    textAlign: 'center'
  },
  description:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  pause: {
    width: 100,
    height: 100,
    marginBottom: 0
  },
  illus: {
      width: 258.11,
      height: 258.11
  },
  arrowline:{
    width: 24,
    height: 77
  }
})
