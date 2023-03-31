//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {EvilIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

const ProfilePage = () => {
  const router = useRouter();
  return (
    <View className="pt-16">
      <TouchableOpacity className="absolute top-16 left-5" onClick={() => router.back()} activeOpacity={0.7}>
        <EvilIcons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;
