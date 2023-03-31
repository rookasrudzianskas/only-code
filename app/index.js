//@ts-nocheck
import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import users from '../assets/data/users'

const Page = () => {
  const user = users[0];

  return (
    <View className="pt-16 mx-5">
      <View className="rounded-lg">
        <ImageBackground
          src={user.coverImage}
          style={{ borderRadius: 10 }}
          borderRadius={10}
          opacity={0.9}
          className="w-full h-36 rounded-lg flex flex-row items-center"
        >
          <View>
            <Image
              src={user.avatar}
              className="w-32 h-32 ml-4 rounded-full border border-3 border-white"
            />
          </View>
          <View className="mt-16">
            <Text className="text-2xl font-bold ml-4 text-white">{user.name}</Text>
            <Text className="text-xl ml-4 text-white">@{user.handle}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>

  );
};

export default Page;
