import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {Link, useRouter} from "expo-router";

const UserCard = ({user}) => {
  const router = useRouter();

  return (
    <Link href={`/user${user.id}`} asChild>
      <TouchableOpacity
        activeOpacity={0.7} className="rounded-lg my-2">
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
              className="w-28 h-28 ml-4 rounded-full border-4 border-white"
            />
          </View>
          <View className="mt-12">
            <Text className="text-2xl font-bold ml-4 text-white">{user.name}</Text>
            <Text className="text-xl ml-4 text-white">@{user.handle}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Link>
  );
};

export default UserCard;
// by Rokas with ❤️
