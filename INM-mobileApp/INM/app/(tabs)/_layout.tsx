import { Tabs } from 'expo-router';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from '.';

export default function TabLayout() {
  const colorScheme = useColorScheme();


  const tabBarLabelStyle = {
    color: 'white',
    fontSize: 20,
    marginBottom: 6,
    padding: 6.5,
    borderRadius: 10,
    
    
    
  };

  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown:false,
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveBackgroundColor: '#ff7200' ,
        tabBarStyle:{
          borderColor:'gray',
          borderWidth: 1,
          
        }
        
       
      }}>
      <Tabs.Screen 
        name="index"
        
        options={{
          /**tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'play' : 'home-outline'} color={'#ff7200'} />
          ),*/
          tabBarLabel:'home',
          tabBarLabelStyle
        }}
      >
        
      </Tabs.Screen>
      
      <Tabs.Screen 
        name="radio"
        options={{
          tabBarLabelStyle
        }}
      />
      <Tabs.Screen 
        name="news"
        options={{
          tabBarLabelStyle
        }}
      />
      <Tabs.Screen 
        name="shop"
        options={{
          tabBarLabelStyle
        }}
      />
      <Tabs.Screen 
        name="videos"
        options={{
          tabBarLabelStyle
        }}
      />
      
      
    </Tabs>
    
  );
}
