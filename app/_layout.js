import {Amplify, API, DataStore, Hub} from 'aws-amplify';
import React, {useEffect} from 'react'
import {Stack} from "expo-router";
import awsconfig from '../src/aws-exports';
import {Authenticator} from "@aws-amplify/ui-react-native";
import {User} from "../src/models";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  }
});

const CreateUserMutation = `
  mutation createUser($input: CreateUserInput!) {
	createUser(input: $input) {
  	id
    name
    handle
    bio
    subscriptionPrice
  }
}
`

export default function RootLayout() {

  useEffect(() => {
    const removeListener = Hub.listen('auth', async ({payload: {event, data}}) => {
      if (data.payload.event === 'signIn') {
        const userInfo = data.payload.data.attributes
        // Save the user to the database
        const newUser = {
          id: userInfo.sub,
          name: userInfo.name,
          handle: userInfo.nickname,
          subscriptionPrice: 0,
        }

        await API.graphql({ query: CreateUserMutation, variables: { input: newUser }})
        console.log('User created successfully')
      }
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
