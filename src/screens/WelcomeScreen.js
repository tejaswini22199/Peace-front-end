import React, {useState, useEffect} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'
import {useDispatch, useSelector} from "react-redux";
import { Image } from 'react-native'
import axios from 'axios';
import { API_URL } from '../config/constants';

export default function WelcomeScreen({ navigation }) {

  const [ postData, setData ] = useState(null);

  useEffect(() => {
    axios.post(`${API_URL}/sign_in/users/`)
    .then(async (response) => {
      try {
        console.log(response);
        console.log(response.data);
        setData(response.data)
      } catch (e) { reject(e) }
    }).catch((err) => {
      return;
    });
  }, []);

  return (
    <Background>
      <Logo />
      {/* <Header>Peace</Header> */}
      <Paragraph>
        Welcome to <Text style={styles.link}>Pause.</Text>
      </Paragraph>
      <Image source={require('../assets/Icons/Illustration1.png')} style={styles.illus} />
      
        {postData &&
         <Text style={{marginTop: 50, marginBottom:50}}>
             <b>{postData.users}</b> people are using Pause right now.
        </Text>}
      

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Dashboard')}
      >
        Start
      </Button>
    </Background>
  )
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
 illus: {
    width:350,
    height:320,
    alignSelf: 'center'
  }
})
