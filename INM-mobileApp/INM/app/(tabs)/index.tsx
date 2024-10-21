import { Image, StyleSheet, Platform, View,Text, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IoLogoFacebook } from "react-icons/io";
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView ,ScrollView} from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import { StatusBar } from 'react-native';
import axios from 'axios';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Svg, {Line} from 'react-native-svg';
import Animated, { Easing, useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';
import { useFonts } from 'expo-font';
/**
 * 
 * @returns function that renders home page
 */

export default function HomeScreen() {
  const [play,setPlay] = useState(false);
  const [songInfo, setSongInfo] = useState({ artist_name: '', song_name: '' });
  const [error, setError] = useState('');
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    GilroyExtraBold: require('../../assets/fonts/Gilroy-ExtraBold.otf'),
  });
  const playMusic = async () => {
    try {
      setPlay(true);
      const response = await axios.get('http://127.0.0.1:5100/play');
      
      console.log('Output:', response.data.output);
      console.log('Error:', response.data.error);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const stopMusic = async () => {
    try {
      setPlay(false);
      const response = await axios.get('http://127.0.0.1:5100/stop');
      
      console.log('Output:', response.data.output);
      console.log('Error:', response.data.error);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    const fetchSongInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5100/current-song');
        console.log('Output:', response.data.output);
        setSongInfo(response.data);
      } catch (err) {
        setError('Erro ao buscar informações da música.');
      }
    };

    fetchSongInfo();
  }, []);
  
  
  return (
    
    <GestureHandlerRootView>
    <StatusBar barStyle="light-content" /> 
    <ScrollView style={{backgroundColor: 'black'}}>
      <ThemeProvider value={DarkTheme}>
      <View style={styles.topView}>
          <Image source={require('../../assets/images/AF-INEEDMUSIC-LOGO-WEBSITE.jpg')} style={styles.logoBrand} />
        <View style={styles.logosView}>
          <TouchableOpacity onPress={()=>{}}>
            <AntDesign name="facebook-square" size={23} color="black" style={styles.logosSocialFacebook} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} >
            <Foundation name="social-instagram" size={28} color="black" style={styles.logosSocialInstagram} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} >
            <Foundation name="social-linkedin" size={28} color="black" style={styles.logosSocialLinkedin} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} >
            <AntDesign name="youtube" size={27} color="black" style={styles.logosSocialYoutube} />
          </TouchableOpacity>
        </View>
      </View>

        
              
        <View style={styles.bottomPlay}  >
              

          { !play &&
            <TouchableOpacity onPress={playMusic} style={{borderColor: Colors.black, marginLeft:10}} >
              <AntDesign name="play" size={24} color="black" />
              
            </TouchableOpacity>
          }
          {
            play &&
            <TouchableOpacity onPress={stopMusic} style={{marginLeft:10}}>
              <AntDesign name="pausecircle" size={24} color="black" />
            </TouchableOpacity>
          }
          <View>
                <Text style={{fontSize:14, marginLeft:5, color:Colors.black, fontFamily: 'GilroyExtraBold', }}>{songInfo.artist_name} - {songInfo.song_name}</Text>
          </View>
        </View>
      </ThemeProvider>
    </ScrollView>
  </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  slogan: {
    fontSize: 18,
    marginTop: 24,
    textAlign: 'center',
    color: '#ff7200',
  },
  logosSocialFacebook:{
    color: 'white',
    marginTop: 2,
    textAlign: 'right',
    width: '100%',
  },
  logosSocialInstagram:{
    color: 'white',
    textAlign: 'right',
    width: '100%',
  },
  logosSocialLinkedin:{
    color: 'white',
    textAlign: 'right',
    width: '100%',
  },
  logosSocialYoutube:{
    color: 'white',
    textAlign: 'right',
    width: '100%',
  },
  logosView:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    gap: 10,
    marginRight: 10
  },
  buttonBorderLogoSocial:{
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  topView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    
  },
  logoBrand:{
    width: 100,
    height: 100,
    marginTop: 22,
    marginLeft: 10,
  },
  bottomPlay:{
    position: 'relative',
    bottom:0,
    marginTop: 20,
    height: 50,
    backgroundColor: '#ff7200',
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    fontFamily: 'GilroyExtraBold',
    alignItems: 'center',
    gap: 10,
    
    
  }
  
});
