import { Image, StyleSheet, Platform, View,Text, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
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


/**
 * 
 * @returns function that renders home page
 */







export default function HomeScreen() {
  const [play,setPlay] = useState(false);

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

        
        

        <View style={styles.bottomPlay}>
          { !play &&
            <TouchableOpacity onPress={playMusic}>
              <Text >Play Now</Text>
            </TouchableOpacity>
          }
          {
            play &&
            <TouchableOpacity onPress={stopMusic}>
              <Text >Stop</Text>
            </TouchableOpacity>
          }
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
    position: 'absolute',
    top: '0%',
    
    
    
    width: '100%',
    height: 100,
    backgroundColor: '#ff7200',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  }
  
});
