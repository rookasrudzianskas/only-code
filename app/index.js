//@ts-nocheck
import React from 'react';
import {Text, View, Image, ImageBackground, FlatList} from 'react-native';
import users from '../assets/data/users'
import UserCard from "../components/UserCard";

const Page = () => {
  const user = users[0];

  return (
    <View className="pt-16 mx-5">
      <FlatList
        contentContainerStyle={{paddingBottom: 100}}
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>

  );
};

export default Page;
