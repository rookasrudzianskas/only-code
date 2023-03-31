//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {EvilIcons} from "@expo/vector-icons";
import {Link, useRouter, useSearchParams} from "expo-router";
import users from '../../assets/data/users';

const ProfilePage = () => {
  const router = useRouter();
  const {id} = useSearchParams();
  const user = users.find((user) => user.id === id);
  return (
    <View className="pt-16">
      <Link href={'/'} asChild>
        <TouchableOpacity className="absolute top-16 left-5" activeOpacity={0.7}>
          <EvilIcons name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
      </Link>
      <View>

      </View>
    </View>
  );
};

export default ProfilePage;
