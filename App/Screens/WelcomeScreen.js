import React, { useState, useEffect } from "react";
import { Box, Text, Image, Heading, ScrollView, Button } from "native-base";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [appInfo, setAppInfo] = useState([]);
  const appId = 787;

  useEffect(() => {
    axios
      .get(
        `https://cms.travpromobile.com/api/app/app-info/?app_id=${appId}&format=json`
      )
      .then((result) => {
        setAppInfo(result.data.app[0]);
      });
  }, []);

  console.log(JSON.stringify(appInfo, null, 2));

  return (
    <Box
      flex={1}
      _dark={{ bg: "gray.900" }}
      justifyContent="center"
      alignItems="center"
    >
      <Image
        alt="background-image"
        source={{ uri: appInfo.splash_screen }}
        h="100%"
        w="100%"
        position="absolute"
      />
      <Image
        alt="logo-image"
        source={{ uri: appInfo.appIcon }}
        h="32"
        w="32"
        position="absolute"
        top="20"
      />
      <Box position="absolute" bottom="10" right="20" left="20" p="6">
        <Button
          my="2"
          bg="primary.400"
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Continue</Text>
        </Button>
        <Button bg="blueGray.50">
          <Text color="gray.800">Switch User</Text>
        </Button>
      </Box>
    </Box>
  );
}
