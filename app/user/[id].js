//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, FlatList} from 'react-native';
import {Link, useRouter, useSearchParams} from "expo-router";
import users from '../../assets/data/users';
import UserProfileHeader from "../../components/UserProfileHeader";
import posts from '../../assets/data/posts';
import Post from "../../components/Post";
import {EvilIcons} from "@expo/vector-icons";

const ProfilePage = () => {
  const {id} = useSearchParams();
  const user = users.find((user) => user.id === id);
  const [isSubscribed, setIsSubscribed] = useState(false);


  if(!isSubscribed) {
    return (
      <View>
        <UserProfileHeader user={user} setIsSubscribed={setIsSubscribed} isSubscribed={isSubscribed} />
        <View className="flex flex-col mx-5 h-36 border rounded-lg flex p-4 mt-36 items-center justify-between border-gray-300 ">
          <EvilIcons className="" name="lock" size={50} color="gray" />
          <TouchableOpacity className="w-full bg-blue-400 py-3 px-5  flex items-center justify-center rounded-full">
            <Text className="text-base text-white font-semibold">SUBSCRIBE TO SEE USERS POSTS</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


  return (
    <View className="">
      <FlatList
        ListHeaderComponent={() => (
          <UserProfileHeader user={user} setIsSubscribed={setIsSubscribed} isSubscribed={isSubscribed} />
        )}
        data={posts}
        renderItem={({item}) => (
          <Post post={item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProfilePage;
