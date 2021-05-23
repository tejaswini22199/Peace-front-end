import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet ,Image} from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import BackButton from '../components/BackButton'

export default function Posts({ navigation }) {
  return (
      
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={2}
        showPagination
      >
        <View style={styles.child}>
        <BackButton goBack={navigation.goBack} />

          <View style={styles.card}>
            <Image
            style={styles.images}
            source={require('../assets/1.png')}
            />
                        <Text>What is Depression?</Text>

          </View>
        </View>
        <View style={styles.child}>
        <BackButton goBack={navigation.goBack} />

        <View style={styles.card}>
        <Image
            style={styles.images}
            source={require('../assets/2.png')}
            />
            <Text>What is Depression?</Text>
          </View>
        </View>
        <View style={styles.child}>
        <BackButton goBack={navigation.goBack} />

        <View style={styles.card}>
        <Image
            style={styles.images}
                source={require('../assets/3.png')}
            />
                        <Text>What is Depression?</Text>

          </View>
        </View>
        <View style={styles.child}>
        <BackButton goBack={navigation.goBack} />

        <View style={styles.card}>
        <Image
            style={styles.images}
            source={require('../assets/4.png')}
            />
                        <Text>What is Depression?</Text>

          </View>
        </View>
      </SwiperFlatList>
  )
}
const { width } = Dimensions.get('window')


const styles = StyleSheet.create({
  child: { 
      width, 
      justifyContent: 'center' ,
      alignItems: 'center',
      backgroundColor:"#fff"
    },
    card:{
       
        width:width/1.3,
        height:"50%",
        borderRadius:10,
        backgroundColor:"rgb(252,238,237)",
    },
    images:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:"80%",
        width:"100%",
    },
  text: { 
      fontSize: width * 0.5, 
      textAlign: 'center' },
})
