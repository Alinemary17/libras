import React from 'react';
import {View,Text, Image,TouchableOpacity, Linking, TextInput, Alert} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'



import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Cores(){
const navigation = useNavigation();


   function navigateToAzul(){
       navigation.navigate('Azul')
      }

   function navigateToAmarelo(){
        navigation.navigate('Amarelo')
    }

    function navigateToVerde(){
        navigation.navigate('Verde')
    }

      function navigateToVermelho(){
        navigation.navigate('Vermelho')
      }




    function navigateBack(){
    navigation.goBack()
    }



    return(
     <View style={styles.container}>

<View style={styles.incident}>

           <Text style={styles.title}>CORES</Text>

           <Text style={styles.description}> </Text>

           <View style= {styles.boxImage}>


                <TouchableOpacity  onPress={navigateToAzul}>
                    <Image style={styles.cores} source={require('../../assets/etapa1/azul.png')} resizeMode= "contain"/>
                </TouchableOpacity>


                  <TouchableOpacity  onPress={navigateToAmarelo}>
                    <Image style={styles.cores} source={require('../../assets/etapa1/amarelo.png')} resizeMode= "contain"/>
                  </TouchableOpacity>


           </View>

            <View style= {styles.boxImage}>

                  <TouchableOpacity  onPress={navigateToVerde}>
                      <Image style={styles.cores} source={require('../../assets/etapa1/verde.png')} resizeMode= "contain"/>
                   </TouchableOpacity>

                  <TouchableOpacity  onPress={navigateToVermelho}>
                         <Image style={styles.cores} source={require('../../assets/etapa1/vermelho.png')} resizeMode= "contain"/>
                  </TouchableOpacity>


             </View>







          <TouchableOpacity onPress={navigateBack}>
          <Feather name = "arrow-left" size={30}  color="#004d91"/>
          </TouchableOpacity>
     </View>
</View>

  );
}