//@ts-nocheck
import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import users from '../assets/data/users'
import UserCard from "../components/UserCard";

const Page = () => {
  const user = users[0];

  return (
    <View className="pt-16 mx-5">
      <UserCard user={user} />
      <UserCard user={user} />
    </View>

  );
};

export default Page;
