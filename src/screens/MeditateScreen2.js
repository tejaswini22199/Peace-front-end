import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import{CountdownCircleTimer } from 'react-countdown-circle-timer'
import Button from '../components/Button'
import { Audio } from 'expo-av';
import BackButton from '../components/BackButton'

export default function MeditateScreen2({ navigation }){
  const [play,setPlay]=useState(false);
  const [sound,setSound]=useState('');
  const remainingTime = 1000;
  const getTimeSeconds = (time) => (remainingTime- time) | 0;
  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audiofiles/hello1.mp3')
     
    );
    setSound(sound);
    await sound.playAsync(); }
  async function stopSound(){
    console.log('Stopping Sound');
    // await sound.stopAsync();
    setSound('');
  }

    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

    return (
        <View style={styles.root}>
            <BackButton goBack={navigation.goBack} />
            <Text style={styles.heading}>Meditation</Text>  
            <TouchableOpacity style={styles.topbar}onPress={()=>
            {
              setPlay(!play)
              if(!play)
              playSound();
              else
              stopSound();
            }
              }>
              {
                   play?
                   <Image style={styles.iconup} source={require('../assets/VolumeUp.png')}></Image>
                   :
                   <Image style={styles.iconoff} source={require('../assets/Volumeoff.png')}></Image>
              }
          </TouchableOpacity>
            <View style={styles.timer}> 

  <CountdownCircleTimer
    onComplete={() => {
      // do your stuff here
      return [true, 1500] // repeat animation in 1.5 seconds
    }}
    isPlaying
    duration={1000}
    colors={[["#7012CE", 1]]}
    initialRemainingTime={remainingTime}
    onComplete={(totalElapsedTime) => [
      remainingTime - totalElapsedTime > 0
    ]}
    
  >
    {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
    </CountdownCircleTimer>
  </View>
  <View style={styles.bottom}>
    <TouchableOpacity style={styles.playbtns} onPress={()=>stopSound()}>
      <Image  style={styles.image}  source={require('../assets/pause.png')}></Image>
      <Text style={styles.subheading}>Pause</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.playbtns} onPress={()=>stopSound()}>
      <Image style={styles.image} source={require('../assets/stop.png')}></Image>
      <Text>Stop</Text>
    </TouchableOpacity>
  </View>
  <Button mode="contained" onPress={() => navigation.navigate('MeditateScreen')}>
                Back
            </Button>
        </View>
        
    )
} 


const styles = StyleSheet.create({
  root:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop: 65
  },
  heading:{
    fontSize:20,
    color:"black",
    margin:20,
  },
  timer:{
      width:"200px",
      height:"200px",
      display:'flex',
      justifyContent:"center",
      alignItems:"center",
  },
  bottom:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
  },
  image:{
    width:"100px",
    height:"100px",
  },
  playbtns:{
    alignItems:"center",
    justifyContent:"center",
  },
  subheading:{
    marginLeft:"-10px",
  },
  iconup:{
    width:"38px",
    height:"31px",
    
  },
  iconoff:{
    width:"34px",
    height:"34px",
    
  },
  topbar:{
    margin:"20px",
  }
  
})

