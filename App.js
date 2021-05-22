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
<<<<<<< HEAD
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  MeditateScreen
} from './src/screens'
||||||| f262e12
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'
=======
import 'react-native-gesture-handler';
>>>>>>> 6e0c2d52ab9e58837c66c5bcf31dffd6a4b713e4


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
<<<<<<< HEAD
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}


 { <Stack.Navigator
||||||| f262e12
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
=======
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
>>>>>>> 6e0c2d52ab9e58837c66c5bcf31dffd6a4b713e4
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
<<<<<<< HEAD
          <Stack.Screen name="MeditateScreen" component={MeditateScreen}/>
        </Stack.Navigator>
 }
     
||||||| f262e12
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
=======
        </Stack.Navigator> */}
>>>>>>> 6e0c2d52ab9e58837c66c5bcf31dffd6a4b713e4
