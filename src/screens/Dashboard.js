import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StatusBar } from "react-native";
import React from 'react'
import Button from '../components/Button'
import {useDispatch, useSelector} from "react-redux";
import { logout } from "../actions/auth";
export default function Dashboard({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const { errorMessageLogout } = auth;

  return (
    <View>
      <StatusBar hidden={true} />
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
        >
        <View
        style={{
          width: 157,
          height: 117,
          left: 21,
          top: 127,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            lineHeight: 39,
            textAlign: "right",
            color: "#121338",
            fontWeight: "bold",
          }}
        >
          Hello {auth.user}!
        </Text>
      </View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#6658F6",
            borderRadius: 38,
            justifyContent: "center",
            width: 300,
            marginTop: 109.33,
            height: 42,
          }}
        >
          <Text style={{ fontSize: 14, color: "#fff" }}>
            Congrats! You have lowered your stress
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#F19D89",
            borderRadius: 7,
            marginTop: 37,
            justifyContent: "center",
            height: 113,
            width: 287,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              lineHeight: 108.1,
              color: "#fff",
            }}
          >
            Pause app usage
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",

            marginTop: 27,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#6DA6F8",
              borderRadius: 7,
              justifyContent: "center",
              width: 132,
              marginHorizontal: 10,
              height: 133.94,
            }}
          >
            <Text style={{ fontSize: 17, color: "#fff" }}>Meditate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#0A0B31",
              borderRadius: 7,
              justifyContent: "center",
              marginHorizontal: 10,

              width: 132,
              height: 133.94,
            }}
          >
            <Text style={{ fontSize: 17, color: "#fff" }}>Journal</Text>
          </TouchableOpacity>
        </View>
        <Button
            mode="outlined"
            style={{marginTop: 37}}
            loading={auth.loggingOut}
            onPress={() => dispatch(logout())}
      >LogOut</Button>
      </View>
      </View>
  );
}
