import React, {useState, useEffect} from 'react'
import { View, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
// import Header from '../components/Header'
import Button from '../components/Button'
import { Image } from 'react-native';
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import { API_URL } from '../config/constants';

export default function JournalList({ navigation }) {
  const auth = useSelector((state) => state.auth); 
  const [postData,setData]=useState(null);
  
  const defaultText = 'Put down your thoughts and reflections...'
  const dispatch = useDispatch();
  const [ text, setText ] = useState({ value: defaultText});
  const [ loading, setLoading ] = useState(false);


  useEffect(() => {
    let formData = new FormData(); 

    formData.append('username', auth.user);   //append the values with key, value pair
    // formData.append('content', 'helloooo'); //

    console.log(`Token ${auth.token}`)
    setLoading(true);
    axios.post(`${API_URL}/posts/list/`, formData,{
      headers: {
        Authorization: `Token ${auth.token}`,
      },
    })
    .then(async (response) => {
      try {
        console.log(response);
        console.log(response.data)
        setData(response.data)
        setLoading(false);
      } catch (e) { reject(e) }
    }).catch((err) => {
      return;
    });
  }, []);
  
  return (
    <Background>
      <Text style={styles.heads}>Journal</Text>
      {/* <Header>Peace</Header> */}
      <Text style={styles.description}>Your Previous Posts</Text>
      <View style={{width:300,height:300}}>
     <ScrollView showsVerticalScrollIndicator={false} style={{
       width:300,
       height:300,
     }}>
      {postData && postData.map((data) => (
        
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#B4EAF7',
            borderRadius: 7,
            marginTop: 5,
            justifyContent: 'center',
            height: 100,
            width: 287,
            color:"black"
          }}
          key={data.post_id}
        >
          <View
          style={{
            flexDirection: "row",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "black",
              marginTop: -5,
              margin: 10,
              textAlign: "center"
            }}
          >
            {data.content}Hi
          </Text>
          </View>
        </TouchableOpacity>
      ))}
     </ScrollView>
     </View>
      <Button
        mode="contained"
        onPress={()=>navigation.navigate('JournalWrite')}>
        Wanna Write?
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
    top: 20,
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 33,
    textAlign: 'center',
    marginBottom:10,
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
