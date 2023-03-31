//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Link, useRouter, useSearchParams} from "expo-router";
import users from '../../assets/data/users';
import UserProfileHeader from "../../components/UserProfileHeader";

const ProfilePage = () => {
  const {id} = useSearchParams();
  const user = users.find((user) => user.id === id);
  const [isSubscribed, setIsSubscribed] = useState(false);


  return (
    <View className="">
      <UserProfileHeader user={user} setIsSubscribed={setIsSubscribed} isSubscribed={isSubscribed} />
    </View>
  );
};

export default ProfilePage;
