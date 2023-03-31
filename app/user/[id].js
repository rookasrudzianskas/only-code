//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, FlatList} from 'react-native';
import {Link, useRouter, useSearchParams} from "expo-router";
import users from '../../assets/data/users';
import UserProfileHeader from "../../components/UserProfileHeader";
import posts from '../../assets/data/posts';
import Post from "../../components/Post";

const ProfilePage = () => {
  const {id} = useSearchParams();
  const user = users.find((user) => user.id === id);
  const [isSubscribed, setIsSubscribed] = useState(false);


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
