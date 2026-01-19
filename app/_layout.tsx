// _layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // for tab icons

import { SafeAreaView } from "react-native-safe-area-context";
export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#4a90e2',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#1e1e1e',
            borderTopWidth: 0,
            height: 50,           // a good height for icon + label
            paddingBottom: 10,    // add padding for navigation bar
          },

        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="menu-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="login"
          options={{
            tabBarLabel: 'login',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            href: null, 
          }}
        />

      </Tabs>
    </SafeAreaView>
  );
}
