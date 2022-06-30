import React from "react";
import { useColorMode, Switch, Text, HStack } from "native-base";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center" alignSelf="center" marginTop={4}>
      <Text>Dark</Text>
      <Switch
        shadow={4}
        size="md"
        offTrackColor="primary.400"
        onTrackColor="primary.200"
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
