import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RedesSociais from '@/components/RedesSociais'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const radio = () => {
  return (
    <GestureHandlerRootView>
        
          <ScrollView style={{backgroundColor: 'black'}}>

          <RedesSociais></RedesSociais>

            
            <View style={{flexDirection:'column'}}>
              <View style={{marginTop:30, justifyContent:'center', alignItems:'center'}}>
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


          </ScrollView>
        
      </GestureHandlerRootView>
  )
}

export default radio


const styles = StyleSheet.create({
  imageBackground:{
    marginTop:40,
    alignItems: 'center',
    padding: 0,
    
  },
});