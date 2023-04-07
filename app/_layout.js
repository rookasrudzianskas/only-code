import { Amplify } from 'aws-amplify';
import React from 'react'
import {Stack} from "expo-router";
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  )
}
