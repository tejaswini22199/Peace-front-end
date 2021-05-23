import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
// import Header from '../components/Header'
import Button from '../components/Button'
import { Image } from 'react-native';
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'
import {useDispatch, useSelector} from "react-redux";

export default function JournalHome({ navigation }) {
  const auth = useSelector((state) => state.auth);  
  const dispatch = useDispatch();
  if(!auth.user){
      return null
  }
  return (
    <Background >
      <Text style={styles.heads}>Journal</Text>
      {/* <Header>Peace</Header> */}
      <Image source={require('../assets/Icons/Illustration1-2.png')} style={styles.illus} />
      <Text style={styles.description}>What are you feeling greatful for today?</Text>
      <Image source={require('../assets/Icons/DownSwirly.png')} style={styles.arrowline} />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('JournalWrite')}>
        Start Writing
      </Button>
      <TouchableOpacity
        onPress={()=>navigation.navigate('Dashboard')}>
        <Image source={require('../assets/Icons/Frame11.png')} style={styles.pause} />
      </TouchableOpacity>
    </Background>
  )
}

const styles = StyleSheet.create({
  heads: {
    position: 'absolute',
    top: 50,
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 33,
    textAlign: 'center'
  },
  description:{
    fontWeight: 'bold',
    fontSize: 25,
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
