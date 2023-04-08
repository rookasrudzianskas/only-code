//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {AntDesign, EvilIcons, Feather, Ionicons} from "@expo/vector-icons";
import {Link, useRouter} from "expo-router";

const UserProfileHeader = ({user, isSubscribed, setIsSubscribed}) => {
  const router = useRouter();

  return (
    <>
      <ImageBackground className="h-56 w-full" style={{}} src={user.coverImage}>
        <View style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}/>
        <View className="absolute top-16 right-5">
          <Feather name="more-vertical" size={24} color="white" />
        </View>
        <View className="absolute flex flex-row items-center top-12 left-5">
          <Link href={'/'} asChild>
            <TouchableOpacity className="" activeOpacity={0.7}>
              <EvilIcons name="arrow-left" size={30} color="white" />
            </TouchableOpacity>
          </Link>

          <View className="flex flex-col pr-4">
            <View className="flex flex-row items-center">
              <Text className="text-white text-lg font-semibold mr-2 pl-2">OnlyCode</Text>
              <Ionicons name="checkmark-circle-sharp" className="mt-4" size={14} color="white" />
            </View>
            <View className="flex flex-row pl-2">
              <View className="flex flex-row items-center">
                <Text className="text-white font-semibold">1.4</Text>
                <Text className="text-white mx-1">Posts</Text>
              </View>
              <View className="flex flex-row items-center">
                <Text className="text-white font-semibold">300.6K</Text>
                <Text className="text-white mx-1">Likes</Text>
              </View>
              <View className="flex flex-row items-center">
                <Text className="text-white font-semibold">1.3M</Text>
                <Text className="text-white mx-1">Followers</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View className="flex flex-row items-end -mt-12 justify-between mx-5">
        <Image src={user.avatar} className="w-28 h-28 border-4 border-white rounded-full" />
        <View className="flex flex-row items-center">
          <TouchableOpacity className="w-9 h-9 mx-2 flex items-center justify-center border rounded-full border-gray-200" activeOpacity={0.7}>
            <AntDesign name="sharealt" size={18} color="#4169e1" />
          </TouchableOpacity>
          <TouchableOpacity className="w-9 h-9 mx-2 flex items-center justify-center border rounded-full border-gray-200" activeOpacity={0.7}>
            <EvilIcons name="star" size={18} color="#4169e1" />
          </TouchableOpacity>
          <TouchableOpacity className="w-9 h-9 mx-2 flex items-center justify-center border rounded-full border-gray-200" activeOpacity={0.7}>
            <Feather name="share" size={18} color="#4169e1" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mx-5 mt-3">
        <View className="flex flex-row items-center">
          <Text className="text-xl font-semibold mr-1">{user.name}</Text>
          <Ionicons name="checkmark-circle-sharp" className="pt-4 ml-3" size={14} color="black" />
        </View>
        <Text className="text-gray-500">@{user.handle}</Text>

        <Text className="mt-4 text-sm">
          {user.bio.slice(0, 300)}{'...'}
        </Text>

        <View className="mt-7 z-999">
          <Text className="font-semibold text-gray-400">SUBSCRIPTION</Text>
          <View className={`flex flex-row w-full justify-between items-center mt-4 py-4 px-5 rounded-full ${isSubscribed ? 'bg-white  border border-gray-200' : 'bg-blue-400'}`}>
            <TouchableOpacity onClick={() => setIsSubscribed(!isSubscribed)} activeOpacity={0.7}>
              <Text className={`${isSubscribed ? 'text-blue-400' : 'text-white'} font-bold `}>{isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className={`${isSubscribed ? 'text-blue-400' : 'text-white'} font-bold`}>{user.subscriptionPrice === 0 ? 'FOR FREE' : `$${user.subscriptionPrice.toFixed(1)} / month`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default UserProfileHeader;
