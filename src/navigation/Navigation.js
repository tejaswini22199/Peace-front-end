import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from "react-redux";
import {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    ResetPasswordScreen,
    JournalHome,
    JournalWrite,
    MeditateScreen,
    MeditateScreen2,
    Dashboard
  } from '../screens'
const Stack = createStackNavigator();

export default function Navigation(props) {
  const stateType = useSelector((state) => state.type);
  const auth = useSelector((state) => state.auth);
  const userToken = auth.token ? auth.token : null;
  console.log(auth)
  return <Stack.Navigator 
        options={{
            headerShown: false
        }}>
        {userToken === null ? (
        <Stack.Screen
              options={{
                headerShown: false
            }}
            name="StartScreen"
            component={StartScreen}
        />
        ) : (

        <Stack.Screen
              options={{
                headerShown: false
            }}
            name="Dashboard"
            component={Dashboard}
        />
       
       
        )}
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="LoginScreen" component={LoginScreen} />
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="Journal" component={JournalHome} />
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen 
            options={{
              headerShown: false
          }}
          name="ResetPasswordScreen" component={ResetPasswordScreen}/>
          <Stack.Screen 
            options={{
              headerShown: false
          }}
          name="MeditateScreen" component={MeditateScreen}/>
          <Stack.Screen 
            options={{
              headerShown: false
          }}
          name="MeditateScreen2" component={MeditateScreen2}/>
          <Stack.Screen 
            options={{
              headerShown: false
          }}
          name="JournalWrite" component={JournalWrite}/>
    </Stack.Navigator>;
}
