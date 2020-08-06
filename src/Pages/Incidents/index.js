import React from 'react';
import {Feather} from '@expo/vector-icons';
import{useNavigation} from '@react-navigation/native';
import {View, FlatList,Image,Text,TouchableOpacity} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incident(){
    const navigation = useNavigation();

    function navigateToDetail(){
       navigation.navigate('Detail')
    }

      function navigateToMenu(){
           navigation.navigate('Menu')
     }

    return(
    <View style ={styles.container}>
       <View style = {styles.header}>
          <Image style={{marginLeft: 75}} source = {logoImg}/>
       </View>

        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.description}>Venha aprender Língua Portuguesa</Text>


        <View style= {styles.boxImage}>
          <Image style={styles.prof}
              source={require('../../assets/prof.png')} resizeMode= "contain"/>

          <Image style={styles.alunos}
              source={require('../../assets/alunos.png')} resizeMode= "contain"/>

        </View>

           <View style = {styles.link}>
           <TouchableOpacity style={styles.detailsButton}
                       onPress={navigateToDetail}>

                        <Text style={styles.detailsButtonText}> PROFESSOR <Feather name= "arrow-right"
                        size={16}  color= "#E02041"/></Text>


                   </TouchableOpacity>

            <TouchableOpacity style={styles.detailsButton1}
                onPress={navigateToMenu}>

                <Text style={styles.detailsButtonText1}> ALUNO <Feather name= "arrow-right"
                size={16}  color= "#E02041"/></Text>

            </TouchableOpacity>
           </View>
    </View>
    );
}