import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import {useDispatch, useSelector} from "react-redux";
import { logout } from "../actions/auth";

export default function Dashboard({ navigation }) {
  const auth = useSelector((state) => state.auth);

  if (!auth.user) {
    return null;
  }

  const dispatch = useDispatch();
  const { errorMessageLogout } = auth;

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Hello {auth.user}
      </Paragraph>
      <Button
        mode="outlined"
        loading={auth.loggingOut}
        onPress={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Background>
  )
}
