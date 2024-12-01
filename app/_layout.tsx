import React, { useEffect } from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="/details" />
      <Stack.Screen name="/payment" />
    </Stack>
  );
};

export default RootLayout;
