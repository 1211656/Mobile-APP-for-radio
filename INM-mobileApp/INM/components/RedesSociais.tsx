
import React from 'react'
import { Image, StyleSheet, Platform, View,Text, Button, TouchableOpacity, Linking } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';

const RedesSociais = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };
  const iconPress = () => {
    
  }

  return (
    <View style={styles.topTopView}>
        <TouchableOpacity onPress={()=>{}}>
          <View style={styles.topView}>
            <Image source={require('../assets/images/AF-INEEDMUSIC-LOGO-WEBSITE.jpg')} style={styles.logoBrand} />
          </View>
        </TouchableOpacity>
        <View style={styles.logosView}>
          <TouchableOpacity onPress={()=>{handlePress("https://www.facebook.com/INeedMusicRadio")}}>
            <AntDesign name="facebook-square" size={23} color="black" style={styles.logosSocialFacebook} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handlePress("https://www.instagram.com/ineedmusicradio/")}} >
            <Foundation name="social-instagram" size={28} color="black" style={styles.logosSocialInstagram} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handlePress("https://www.linkedin.com/company/i-need-music-radio")}} >
            <Foundation name="social-linkedin" size={28} color="black" style={styles.logosSocialLinkedin} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handlePress("https://www.youtube.com/@INeedMusicRadio")}} >
            <AntDesign name="youtube" size={27} color="black" style={styles.logosSocialYoutube} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default RedesSociais

const styles = StyleSheet.create({
    topTopView:{
        flexDirection: 'row',
        justifyContent:'space-between',
        gap: 10,
    },
    logosView:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        gap: 10,
        marginRight: 10,
        marginTop: 30,
      },
     
      logoBrand:{
        width: 30,
        height: 30,
        marginTop: 30,
       
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
      topView:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
       
        
      },
})