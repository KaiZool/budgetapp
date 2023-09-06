import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-600"> Hey, there is a new app in the works! Testing </Text>
        <StatusBar style="auto" />
      </SafeAreaView>
      </TailwindProvider>
  );
}

