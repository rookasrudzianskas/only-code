//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import UserCard from "../components/UserCard";
import {Link} from "expo-router";
import {AntDesign} from "@expo/vector-icons";
import {useAuthenticator} from "@aws-amplify/ui-react-native";
import {DataStore} from "aws-amplify";
import {User} from "../src/models";

const Page = () => {
  const {signOut} = useAuthenticator()
  const [users, setUsers] = useState([]);

  useEffect(() => {
    DataStore.query(User).then(setUsers);
  }, [])

  if(!users) {
    return (
      <View className="flex h-screen items-center justify-center">
        <ActivityIndicator />
      </View>
    )
  }

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
