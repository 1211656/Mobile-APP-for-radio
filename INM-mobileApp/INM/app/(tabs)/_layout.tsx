import { Tabs } from 'expo-router';
import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    GilroyExtraBold: require('../../assets/fonts/Gilroy-ExtraBold.otf'),
  });

  const tabBarLabelStyle = {
    color: 'white',
    fontSize: 20,
    marginBottom: 6,
    padding: 6.5,
    borderRadius: 10,
  };
  const Tab = createBottomTabNavigator();

  return (
    
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'black',
          headerShown:false,
          tabBarInactiveBackgroundColor: 'black',
          tabBarActiveBackgroundColor: '#ff7200' ,
        
        }}>
        <Tabs.Screen 
          name="index"
          
          options={{
            /**tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'play' : 'home-outline'} color={'#ff7200'} />
            ),*/
            tabBarLabel:'Home',
            
            tabBarLabelStyle:{
              fontFamily: 'GilroyExtraBold',
              fontSize: 16,
              padding: 15,
            }
          }}
        >
          
        </Tabs.Screen>
        
        <Tabs.Screen 
          name="radio"
          options={{
            tabBarLabel:'Radio',

            tabBarLabelStyle:{
              fontFamily: 'GilroyExtraBold',
              fontSize: 16,
              padding: 15,
            }
          }}
        />
        <Tabs.Screen 
          name="news"
          options={{
            tabBarLabel:'News',
            tabBarLabelStyle:{
              fontFamily: 'GilroyExtraBold',
              fontSize: 16,
              padding: 15,
            }
          }}
        />
        <Tabs.Screen 
          name="shop"
          options={{
            tabBarLabel:'Shop',
            tabBarLabelStyle:{

              fontFamily: 'GilroyExtraBold',
              fontSize: 16,
              padding: 15,
            }
          }}
        />
        <Tabs.Screen 
          name="videos"
          options={{
            tabBarLabel:'Videos',
            tabBarLabelStyle:{
              fontFamily: 'GilroyExtraBold',
              fontSize: 16,
              padding: 12,
            }
          }}
        />
        
        
      </Tabs>
    
  );
}
