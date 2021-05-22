import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from "react-redux";
import {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    ResetPasswordScreen,
    Dashboard,
  } from '../screens'

const Stack = createStackNavigator();

export default function Navigation(props) {
  const stateType = useSelector((state) => state.type);
  const auth = useSelector((state) => state.auth);
  const userToken = auth.token ? auth.token : null;
  return <Stack.Navigator >
        {userToken === null ? (
        <Stack.Screen
            
            name="StartScreen"
            component={StartScreen}
        />
        ) : (
        <Stack.Screen
            name="Dashboard"
            component={Dashboard}
        />
        )}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
    </Stack.Navigator>;
}
