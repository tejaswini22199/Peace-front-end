import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import {useDispatch, useSelector} from "react-redux";
import { theme } from '../core/theme'
import { nameValidator } from '../helpers/nameValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { login } from "../actions/auth";

export default function LoginScreen({ navigation }) {

  const [ username, setUsername ] = useState({ value: '', error: '' });
  const [ password, setPassword ] = useState({ value: '', error: '' });
  const auth = useSelector((state) => state.auth);
  const { errorMessageLogin } = auth;
  const dispatch = useDispatch();
  if (auth.user) {
    return null;
  }


  const onLoginPressed = () => {
    const passwordError = passwordValidator(password.value)
    const usernameError = nameValidator(username.value)
    if (passwordError || usernameError) {
      setUsername({ ...username, error: usernameError })
      setPassword({ ...password, error: passwordError })
      return
    }
    
    dispatch(login(username, password))

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      { errorMessageLogin && <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={styles.errorMessage}>{errorMessageLogin}</Text>
      </View> }
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        autoCapitalize="none"
        error={!!username.error}
        errorText={username.error}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      
      <Button mode="contained" onPress={onLoginPressed} loading={auth.loggingIn}>
        Login
      </Button>
      {/* <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  errorMessage: {
    color: 'red'
  }
})
