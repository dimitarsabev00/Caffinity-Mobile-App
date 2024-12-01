import { COLORS } from "@/theme/theme";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="shopping-cart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="star"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orderHistory"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: COLORS.primaryBlackHex,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
    paddingTop: 15,
  },
  BlurViewStyles: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default TabsLayout;
