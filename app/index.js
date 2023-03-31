//@ts-nocheck
import React from 'react';
import {Text, View, Image, ImageBackground, FlatList} from 'react-native';
import users from '../assets/data/users'
import UserCard from "../components/UserCard";
import {Link} from "expo-router";
import {AntDesign} from "@expo/vector-icons";

const Page = () => {
  const user = users[0];

  return (
    <View className="pt-16 mx-5">
      <Link href={'/newPost'} className="">
        <AntDesign name="addfile" size={20} className="my-2" color="black" />
      </Link>
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
