// import React from "react";
// import Icon from "@expo/vector-icons/MaterialIcons";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { View, Text, StatusBar } from "react-native";
// import {MeditateScreen} from './MeditateScreen'

// export default function Dashboard({ navigation }) {
//   return (
//     <View
//       style={{
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgb(241,235,228)",
//       }}
//     >
//       <StatusBar hidden={true} />

//       <View
//         style={{
//           flexDirection: "row",
//           marginTop: 63,
//           marginHorizontal: 23,
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <Icon name="call" size={30} color="#DB0202" />
//         <Icon name="notifications" size={30} color="#130F26" />
//       </View>

//       <View
//         style={{
//           position: "absolute",
//           width: 157,
//           height: 117,
//           left: 21,
//           top: 127,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: "30px",
//             lineHeight: "39px",
//             textAlign: "right",
//             color: "#121338",
//             fontWeight: "bold",
//           }}
//         >
//           Hello Andrew!
//         </Text>
//       </View>

//       <View
//         style={{
//           marginTop: 164,
//           width: "100%",
//           alignItems: "center",
//         }}
//       >
//         <View
//           style={{
//             alignItems: "center",
//             backgroundColor: "#6658F6",
//             borderRadius: 38,
//             justifyContent: "center",
//             width: 300,
//             marginTop: 109.33,
//             height: 42,
//           }}
//         >
//           <Text style={{ fontSize: 14, color: "#fff" }}>
//             Congrats! You have lowered your stress
//           </Text>
//         </View>
//         <TouchableOpacity
//           style={{
//             alignItems: "center",
//             backgroundColor: "#F19D89",
//             borderRadius: 7,
//             marginTop: 37,
//             justifyContent: "center",
//             height: 113,
//             width: 287,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 18,
//               fontWeight: "500",
//               lineHeight: "108.1%",
//               color: "#fff",
//             }}
//           >
//             Pause app usage
//           </Text>
//         </TouchableOpacity>
//         <View
//           style={{
//             flexDirection: "row",

//             marginTop: 27,
//           }}
//         >
//           <TouchableOpacity
//             style={{
//               alignItems: "center",
//               backgroundColor: "#6DA6F8",
//               borderRadius: 7,
//               justifyContent: "center",
//               width: 132,
//               marginHorizontal: 10,
//               height: 133.94,
//             }}
//             onPress={()=>navigation.navigate('Dashboard')}
//           >
//             <Text style={{ fontSize: 17, color: "#fff" }}>Meditate</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               alignItems: "center",
//               backgroundColor: "#0A0B31",
//               borderRadius: 7,
//               justifyContent: "center",
//               marginHorizontal: 10,

//               width: 132,
//               height: 133.94,
//             }}
//           >
//             <Text style={{ fontSize: 17, color: "#fff" }}>Journal</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }


import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {BackButton,Button} from '../components/BackButton'
export default function Dashboard(){
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(241,235,228)",
          }}>
          <BackButton goBack={navigation.goBack} />
            <Text style={{ fontSize: 17, color: "#fff" }}>Meditate</Text>
            {/* <Image></Image>
            <Text>We love you to join our Meditation Session</Text>
            <Button></Button> */}
        </View>
    )
}


// const styles = StyleSheet.create({})
