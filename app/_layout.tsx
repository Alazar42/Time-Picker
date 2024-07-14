import { Stack } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#0001ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name='index' 
      options={{ 
          title: 'DatePicker'
        }} />
      </Stack>
  );
}
