import { Amplify, Hub } from 'aws-amplify';
import React, {useEffect} from 'react'
import {Stack} from "expo-router";
import awsconfig from '../src/aws-exports';
import {Authenticator} from "@aws-amplify/ui-react-native";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  }
});

export default function RootLayout() {

  useEffect(() => {
    const removeListener = Hub.listen('auth', ({payload: {event, data}}) => {

    })
    return () => {
      removeListener()
    }
  }, [])

  return (
    <Authenticator.Provider>
      <Authenticator>
        <Stack screenOptions={{ headerShown: false }} />
      </Authenticator>
    </Authenticator.Provider>
  )
}
