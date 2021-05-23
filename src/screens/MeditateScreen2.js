import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import{CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Audio } from 'expo-av';
const MeditateScreen2= () => {
  const [play,setPlay]=useState(false);
  const [sound,setSound]=useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audiofiles/Hello.mp3')
     
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }
  async function stopSound(){
    console.log('Stopping Sound');
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
            <Text style={styles.heading}>Meditatation</Text>  
            <TouchableOpacity style={styles.topbar}onPress={()=>{
              console.log(play);
              setPlay(!play);
              console.log(play);
              if(!play)
              playSound();
              else
              stopSound();
              } }>
              {
                   play?
                   <Image style={styles.iconup} source={require('../assets/volumeUp.png')}></Image>
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
    duration={10}
    colors={[["#FFFFFF", 0.2], ["#7012CE", 0.8]]}
  />
  </View>
  <View style={styles.bottom}>
    <TouchableOpacity style={styles.playbtns} onPress={()=>stopSound()}>
      <Image  style={styles.image}  source={require('../assets/pause.png')}></Image>
      <Text style={styles.subheading}>Pause</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.playbtns}>
      <Image style={styles.image} source={require('../assets/stop.png')}></Image>
      <Text>Stop</Text>
    </TouchableOpacity>
  </View>
        </View>
    )
}

export default MeditateScreen2

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

