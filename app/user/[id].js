//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {useSearchParams} from "expo-router";
import UserProfileHeader from "../../components/UserProfileHeader";
import posts from '../../assets/data/posts';
import Post from "../../components/Post";
import {EvilIcons} from "@expo/vector-icons";
import {DataStore} from "aws-amplify";
import {User, Post as PostModel} from "../../src/models";

const ProfilePage = () => {
  const {id} = useSearchParams();
  const [user, setUser] = useState([])
  const [posts, setPosts] = useState([])
  const [isSubscribed, setIsSubscribed] = useState(true);

  useEffect(() => {
    DataStore.query(User, id).then(setUser);
    DataStore.query(PostModel).then(setPosts)
  }, [id])


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
          <Post user={user} post={item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProfilePage;
