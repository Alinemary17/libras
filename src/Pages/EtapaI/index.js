import React from 'react';
import {View,Text, Image,TouchableOpacity, Linking, TextInput, Alert} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';




import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function EtapaI(){
const navigation = useNavigation();


     function navigateToCores(){
       navigation.navigate('Cores')
      }










      function navigateBack(){
      navigation.goBack()
      }



    return(
     <View style={styles.container}>

<View style={styles.incident}>

           <Text style={styles.title}>ETAPA I</Text>


           <View style= {styles.boxImage}>
                <TouchableOpacity  onPress={navigateToCores}>
                    <Image style={styles.cores} source={require('../../assets/etapa1/cor.png')} resizeMode= "contain"/>
                </TouchableOpacity>


              <Image style={styles.coletores}
                  source={require('../../assets/etapa1/coletorLixo.png')} resizeMode= "contain"/>
           </View>

         <View style= {styles.boxImage}>
              <Image style={styles.cores}
                 source={require('../../assets/etapa1/semaforo.png')} resizeMode= "contain"/>

              <Image style={styles.coletores}
                  source={require('../../assets/etapa1/comodos.png')} resizeMode= "contain"/>
          </View>


               <TouchableOpacity style={styles.description} onPress={navigateToCores}>
             <Text style={styles.description}><Feather name= "arrow-right" size={18}  color= "#00427c"/> Cores</Text>
             </TouchableOpacity>

          <TouchableOpacity onPress={navigateBack}>
          <Feather name = "arrow-left" size={30}  color="#004d91"/>
          </TouchableOpacity>


     </View>
</View>

  );

};