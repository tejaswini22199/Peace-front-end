import  AsyncStorage  from '@react-native-community/async-storage';

export async function getAuthAsyncStorage() {
  const token = await AsyncStorage.getItem('userToken');
  const user = await AsyncStorage.getItem('userData');
  return {
    token,
    user
  };
}

export async function setAuthAsyncStorage(response, username) {
  //console.log(response);
  await AsyncStorage.setItem('userToken', response.data.token);
  await AsyncStorage.setItem('userData', username);
}


export async function resetAuthAsyncStorage() {
  await AsyncStorage.removeItem('userData');
  await AsyncStorage.removeItem('userToken');
}
