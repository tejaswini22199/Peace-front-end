

import React,{useState} from 'react'
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native'
import Timer from './Timer'
// import BackButton from '../components/BackButton'
import Button from '../components/Button'
import TimerMinutes from './TimerMinutes'
export default function MeditateScreen({ navigation }){
const [Minutes,setMinutes]=useState('');
const [Hours,setHours]=useState('');
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(241,235,228)",
          }}>
          {/* <BackButton goBack={navigation.goBack} /> */}
          <View style={styles.root}>
            <Text style={styles.heading}>Meditate</Text>  
            <Image style={styles.image} source={require('../assets/meditate1.png')}/>
           
            <View  style={styles.subheading}>
            <Text style={styles.text}>We love you to join our </Text>
            <Text style={styles.text}>Meditation Sessions</Text>
            </View>
            <View style={styles.timer}>
            <Timer getHours={hours=>setHours(hours)}/>
            <TimerMinutes getMinutes={minutes=>setMinutes(minutes)}/>
            </View>
            <Button mode="contained"  onPress={() => navigation.navigate('MeditateScreen2')}>
                Start
            </Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  root:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  heading:{
    fontSize:20,
    color:"black",
    margin:20,
  },
  image: {
    width: 240,
    height: 240,
    margin:10,
  },
  subheading:{
   
    width:150,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    margin:10,
    marginBottom:30,
  },
  text:{
    color:"#660033",
  },
  timer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    marginBottom:"20px"
  }
})


