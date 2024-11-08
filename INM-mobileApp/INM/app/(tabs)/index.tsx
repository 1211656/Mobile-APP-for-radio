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
import RedesSociais from '@/components/RedesSociais';
import Animated, { Easing, useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';
import { useFonts } from 'expo-font';
/**
 * 
 * @returns function that renders home page
 */

export default function HomeScreen() {
  const [play,setPlay] = useState(false);
  const [songInfo, setSongInfo] = useState({ radio_info: '' });
  const [error, setError] = useState('');
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    GilroyExtraBold: require('../../assets/fonts/Gilroy-ExtraBold.otf'),
  });
  const playMusic = async () => {
    try {
      setPlay(true);
      const response = await axios.get('http://0.0.0.0:5200/play');
      
      console.log('Output:', response.data.output);
      console.log('Error:', response.data.error);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const stopMusic = async () => {
    try {
      setPlay(false);
      const response = await axios.get('http://0.0.0.0:5200/stop');
      
      console.log('Output:', response.data.output);
      console.log('Error:', response.data.error);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    const fetchCurrentSong = async () => {
      try {
        const response = await axios.get('http://0.0.0.0:5200/current-song');
        setSongInfo(response.data);
      } catch (error) {
        console.error('There was an error fetching the current song!', error);
      }
    };

    fetchCurrentSong();
  }, []);


  
  
  return (
    
    <GestureHandlerRootView>
    <StatusBar barStyle="light-content" /> 
    <ScrollView style={{backgroundColor: 'black'}}>
      <ThemeProvider value={DarkTheme}>

      <RedesSociais></RedesSociais>

      <View style={styles.imageBackground}>
        <Image src={"https://ineedmusic.pt/wp-content/uploads/2023/12/INMR-3D-HOME-01.png"} style={{height:125, width: 550, borderWidth: 1, borderColor: Colors.black, marginTop: 20}}></Image>
      </View>

      <View style={styles.topView}>
          {/*<Image source={require('../../assets/images/AF-INEEDMUSIC-LOGO-WEBSITE.jpg')} style={styles.logoBrand} />*/}
        
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
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image src='https://ineedmusic.pt/wp-content/uploads/onair/artwork.png' style={{height: 45, width:45}}></Image>
            </View>
            <View style={{justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:13, marginLeft:5, color:Colors.black, fontFamily: 'GilroyExtraBold', textTransform: 'uppercase', fontWeight:'800' }}
                    adjustsFontSizeToFit
                    numberOfLines={1}
                  >
                    I need music radio
                  </Text>
                  <Text style={{fontSize:10, marginLeft:5, color:Colors.black, fontFamily: 'GilroyExtraBold', textTransform: 'uppercase', fontWeight:'200' }}
                    adjustsFontSizeToFit
                    numberOfLines={3}
                  >
                    {songInfo.radio_info}
                  </Text>
            </View>
          </View>
        </View>

          <View style={{flexDirection:'column'}}>
            <View style={{marginTop:60, justifyContent:'center', alignItems:'center'}}>
              <Text style={{color:'black', backgroundColor:'#ff7200',padding:5,textTransform:'uppercase',fontFamily:'GilroyExtraBold', fontSize:20}}>Radio Shows</Text>
            </View>
            <View style={{ marginTop: 10}}>
              <Image src='https://ineedmusic.pt/wp-content/uploads/onair/onair.jpg' style={{height:250,maxWidth:'100%'}} resizeMode='contain'></Image>
            </View>
          </View>

          <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:10}}>
            <View>
              <Text style={{color:'#ff7200', fontSize:17, textTransform:'uppercase', fontFamily:'GilroyExtraBold' }}>Upcoming Shows</Text>
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
    marginRight: 10,
    marginTop: 30,
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
   
    
  },
  logoBrand:{
    width: 100,
    height: 100,
    marginTop: 22,
    marginLeft: 10,
  },
  bottomPlay:{
    position: 'relative',
    marginTop: 0,
    height: 50,
    backgroundColor: '#ff7200',
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    fontFamily: 'GilroyExtraBold',
    alignItems: 'center',
    gap: 10,
    
  },
  imageBackground:{
    marginTop:40,
    alignItems: 'center',
    padding: 0,
    
  },
  boxInImageBackground:{
    backgroundColor: '#ff7200',
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
  
});
