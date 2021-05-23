import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet ,Image} from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist'

export default function Posts({ navigation }) {
  return (
      <SwiperFlatList
        autoplay
        autoplayDelay={100}
        autoplayLoop
        index={2}
        showPagination
      >
        <View style={styles.child}>
          <View style={styles.card}>
            <Image
            style={styles.images}
                source={{uri:"https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"}}
            />
          </View>
        </View>
        <View style={styles.child}>
        <View style={styles.card}>
        <Image
            style={styles.images}
                source={{uri:"https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"}}
            />
          </View>
        </View>
        <View style={styles.child}>
        <View style={styles.card}>
        <Image
            style={styles.images}
                source={{uri:"https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"}}
            />
          </View>
        </View>
        <View style={styles.child}>
        <View style={styles.card}>
        <Image
            style={styles.images}
                source={{uri:"https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"}}
            />
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
      backgroundColor:"#ccc"
    },
    card:{
       
        width:width/1.3,
        height:"50%",
        borderRadius:10,
        backgroundColor:"#fff",
    },
    images:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:"80%",
        width:"100%",
    },
  text: { 
      fontSize: width * 0.5, 
      textAlign: 'center' },
})
