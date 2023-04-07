import { Amplify } from 'aws-amplify';
import React from 'react'
import {Stack} from "expo-router";
import awsconfig from '../src/aws-exports';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  }
});


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  )
}
