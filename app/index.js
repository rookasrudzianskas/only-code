//@ts-nocheck
import React from 'react';
import {Text, View, Image, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import users from '../assets/data/users'
import UserCard from "../components/UserCard";
import {Link} from "expo-router";
import {AntDesign} from "@expo/vector-icons";
import {useAuthenticator} from "@aws-amplify/ui-react-native";

const Page = () => {
  const user = users[0];
  const {signOut} = useAuthenticator()

  return (
    <View className="pt-16 mx-5">
      <View className="flex flex-row justify-between items-center">
        <Link href={'/newPost'} className="">
          <AntDesign name="addfile" size={20} className="my-2" color="black" />
        </Link>
        <TouchableOpacity activeOpacity={0.7} onPress={() => signOut()}>
          <Text className="font-semibold">Sign Out</Text>
        </TouchableOpacity>
      </View>
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
