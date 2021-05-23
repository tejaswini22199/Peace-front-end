import { TouchableOpacity,TouchableHighlight } from 'react-native'
import { View, Text, StatusBar } from 'react-native'
import React, { useState }from 'react'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/auth'
import { Image, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import call from 'react-native-phone-call';
import { getAuthAsyncStorage } from '../services/getAuthAsyncStorage'
// export default function Logo() {
//   return <Image source={require('../assets/logo.png')} style={styles.image} />
// }

export default function Dashboard({ navigation }) {
  const auth = useSelector((state) => state.auth)
  const inputValue ='9999999999';
  const triggerCall=()=>{
    if(inputValue.length!=10){
      console.log("invalid number");
      return;
    }
    const args = {
      number: inputValue,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  
  }
  const dispatch = useDispatch()
  // const { errorMessageLogout } = auth;

  return (
    <View>
      <StatusBar hidden={true} />
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgb(241,235,228)',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            height: 300,

            width: '100%',
            backgroundColor: '#fff',
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
           <TouchableOpacity
           onPress={triggerCall}>
            <Image source={require('../assets/Icons/phone.png')}
             style={{
                height: 130,
                width: 100,
              }} />
           </TouchableOpacity>
            <Image
              source={require('../assets/Icons/notifications.png')}
              onPress={() =>triggerCall}
              style={{
                height: 130,
                width: 100,
              }}
            />
          </View>

          <View
            style={{
              width: 157,
              height: 117,
              left: 21,
              top: 127,
              position: 'absolute',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                lineHeight: 39,
                textAlign: 'right',
                color: '#121338',
                fontWeight: 'bold',
              }}
            >
              Hello {auth.user}!
            </Text>
            <Text
              style={{
                textAlign: 'right',
              }}
            >
              Good to have you back here!
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#6658F6',
            borderRadius: 38,
            justifyContent: 'center',
            width: 300,
            marginTop: 59,
            height: 42,
          }}
        >
          <Text style={{ fontSize: 14, color: '#fff' }}>
            Congrats! You have lowered your stress
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#F19D89',
            borderRadius: 7,
            marginTop: 37,
            justifyContent: 'center',
            height: 113,
            width: 287,
          }}
        >
          <View
          style={{
            flexDirection: "row",
            marginTop: 12,
          }}
        >
          <Image source={require('../assets/Icons/Pause.png')} style={styles.pause} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "#fff",
              marginTop: -5
            }}
          >
            Pause app usage
          </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 27,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#6DA6F8',
              borderRadius: 7,
              justifyContent: 'center',
              width: 132,
              marginHorizontal: 10,
              height: 133.94,
            }}
            onPress={() => navigation.navigate('MeditateScreen')}
          >
            <Image
              source={require('../assets/Icons/Heart.png')}
              style={styles.heart}
            />
            <Text style={{ fontSize: 17, color: '#fff' }}>Meditate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#0A0B31',
              borderRadius: 7,
              justifyContent: 'center',
              marginHorizontal: 10,

              width: 132,
              height: 133.94,
            }}
            onPress={() => navigation.navigate('Journal')}
          >
            <Image
              source={require('../assets/Icons/Journal.png')}
              style={styles.journal}
            />
            <Text style={{ fontSize: 17, color: '#fff' }}>Journal</Text>
          </TouchableOpacity>
        </View>
        <Button
          mode="outlined"
          style={{ marginTop: 37 }}
          loading={auth.loggingOut}
          onPress={() => dispatch(logout())}
        >
          LogOut
        </Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  phone: {
    width: 10,
    height: 10,
  },
  heart: {
    width: 36.68,
    height: 34.94,
    marginBottom: 10,
  },
  journal: {
    width: 36.68,
    height: 40,
    marginBottom: 10,
  },
  pause: {
    width: 36.68,
    height: 40,
    marginTop: -15,
    marginRight: 30,
  },
})
