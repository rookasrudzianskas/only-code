//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import {Link} from "expo-router";
import {EvilIcons, Feather} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const NewPost = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {

  }


  return (
    <View className="pt-16 mx-5">
      <View className="flex flex-row items-center justify-between border-b border-gray-200 pb-3">
        <View className="flex flex-row items-center">
          <Link href={'/'} asChild>
            <TouchableOpacity className="" activeOpacity={0.7}>
              <EvilIcons name="arrow-left" size={30} color="black" />
            </TouchableOpacity>
          </Link>
          <Text className="uppercase text-semibold text-lg ml-1">NEW POST</Text>
        </View>
        <TouchableOpacity onClick={handlePost} className="bg-blue-400 px-6 py-1 flex items-center justify-center rounded-full">
          <Text className="uppercase font-semibold text-base ml-1 text-white">POST</Text>
        </TouchableOpacity>
      </View>
      <View className="border-b border-gray-200 pt-3">
        <TextInput placeholder={'Compose a new text'} value={text} onChangeText={setText} numberOfLines={3} mutiline={true} />
        <View className="mt-7 pb-3">
          <TouchableOpacity onPress={() => pickImage()} activeOpacity={0.7}>
            <Feather name="image" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-10">
        {image && <Image className="rounded-xl" source={{uri: image}} style={{width: '100%', aspectRatio: 1}} /> }
      </View>
    </View>
  );
};

export default NewPost;
