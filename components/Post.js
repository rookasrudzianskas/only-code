import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, Text} from "react-native";
import {Link} from "expo-router";
import {EvilIcons, Feather, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {DataStore, Storage} from "aws-amplify";
import {User} from "../src/models";

const Post = ({ post}) => {
  const [user, setUser] = useState();
  const [imageUri, setImageUri] = useState()

  useEffect(() => {
    DataStore.query(User, post.userID).then(setUser);
  }, [])

  useEffect(() => {
    if(post.image) {
      Storage.get(post.image).then(setImageUri)
    }
  }, [post.image])

  return (
    <View className="my-3">
      <View className="flex mx-5 flex-row items-center  justify-between my-4 mb-2">
        <View className="flex flex-row items-center">
          <Image src={user?.avatar} style={{ width: 40, height: 40, borderRadius: 25,}} />

          <View className="flex flex-col pr-4">
            <View className="flex flex-row items-center">
              <Text className="text-black text-lg font-semibold mr-2 pl-3">{user?.name}</Text>
              <Ionicons name="checkmark-circle-sharp" className="mt-4" size={14} color="black" />
            </View>
            <View className="flex flex-row pl-2">
              <View className="flex flex-row items-center">
                <Text className="text-gray-500 mx-1">@{user?.handle}</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-gray-400 mr-2">3 hours ago</Text>
          <MaterialIcons name="more-horiz" size={20} color="gray" />
        </View>
      </View>
      <View className="mb-3 mx-5 ">
        <Text className="">{post?.text}</Text>
      </View>
      {imageUri && (
        <View className="mx-2">
          <Image src={imageUri} style={{ width: '100%', aspectRatio: 1,}} />
        </View>
      )}
      <View className="mt-3 mx-5 ">
        <TouchableOpacity>
          <Feather name="heart" size={20} color="black" />
        </TouchableOpacity>
        <Text className="font-semibold mt-3">{post?.likes} Likes</Text>
      </View>
    </View>
  );
};

export default Post;
// by Rokas with ❤️
