import React from 'react';
import {View,Text, Image,TouchableOpacity, Linking, TextInput, Alert} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'



import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Verde(){
const navigation = useNavigation();


    function navigateBack(){
    navigation.goBack()
    }



    return(
     <View style={styles.container}>

<View style={styles.incident}>

           <Text style={styles.title}>COR VERDE</Text>

           <Text style={styles.subtitle}> Aqui temos a cor verde, o sinal em libras, a palavra em datilologia e palavra em língua portuguesa </Text>

           <View style= {styles.boxImage}>

              <Image style={styles.cores}
                 source={require('../../assets/etapa1/verde.png')} resizeMode= "contain"/>

              <Image style={styles.coletores}
                  source={require('../../assets/etapa1/sinalVerde.png')} resizeMode= "contain"/>
           </View>


              <Image style={styles.dat}
                 source={require('../../assets/etapa1/datVerde.png')} resizeMode= "contain"/>

              <Image style={styles.port}
                  source={require('../../assets/etapa1/portVerde.png')} resizeMode= "contain"/>








          <TouchableOpacity onPress={navigateBack}>
          <Feather name = "arrow-left" size={30}  color="#004d91"/>
          </TouchableOpacity>
     </View>
</View>

  );
}