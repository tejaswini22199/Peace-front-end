import * as React from 'react'
import { Provider as StoreProvider} from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import store from './src/reducers';
import { navigationRef } from './src/services/navRef'
import Navigation from "./src/navigation/Navigation";
import {useEffect, useState} from "react";
import {loggedIn} from "./src/actions/auth";
import {getAuthAsyncStorage} from "./src/services/getAuthAsyncStorage";
import { theme } from './src/core/theme'
import 'react-native-gesture-handler';


export default function App() {
  const [isLoading, setIsLoadingFromAsyncStorage] = useState(true);

  useEffect(() => {
    const load = async () => {
      await setIsLoadingFromAsyncStorage(true);
      const userStorage = await getAuthAsyncStorage();
      if (userStorage.user && userStorage.token) {
        await store.dispatch(loggedIn({
          user: userStorage.user,
          token: userStorage.token,
        }));
      }
      await setIsLoadingFromAsyncStorage(false);
    }
    load();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}


 {/* <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator> */}