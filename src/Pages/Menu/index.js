
import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import {Feather} from '@expo/vector-icons';
import{useNavigation} from '@react-navigation/native';
import {View, FlatList,Image,Text,TouchableOpacity,ScrollView} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Menu(){
    const navigation = useNavigation();

    const [nome, setNome] = useState('');

    useEffect(() => getUsuario());

    function navigateToEtapaI(){
       navigation.navigate('EtapaI')
    }

    function navigateBack(){
        navigation.goBack()
        }

     function getUsuario() {
	AsyncStorage.getItem('usuario') .then(obj => setNome(JSON.parse(obj).nome));

}


    return(
    <View style ={styles.container}>
              <View style= {styles.boxImage}>
              <Image style={styles.header}
              source = {require('../../assets/iconeTela.png')} resizeMode= "contain"/>

              <Text style={styles.subtitle}> Bem Vindo(a) Prof(a): {nome}</Text>
              </View>

        <Text style={styles.title}>MENU</Text>
        <Text style={styles.subtitle}>Para escolher qual Ano Escolar deseja, basta clicar encima da palavra</Text>

           <FlatList

                       data={[1,2,3]}
                        style={styles.incidentList}
                        keyExtractor={incident => String(incident)}
                        showsVerticalScrollIndicator={false}

                        renderItem={() => (


        <View style={styles.incident}>

        <ScrollView>
        <View>

        <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
            <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> ETAPA I</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
             <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> ETAPA II</Text>
        </TouchableOpacity>
        </View>

        <View>
         <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
              <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> 1º ANO</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
             <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> 2º ANO</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
             <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> 3º ANO</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
             <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> 4º ANO</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
              <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> 5º ANO</Text>
         </TouchableOpacity>

          <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
                 <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> 6º ANO</Text>
           </TouchableOpacity>

            <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
                  <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> 7º ANO</Text>
            </TouchableOpacity>

             <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
                  <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> 8º ANO</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.description} onPress={navigateToEtapaI}>
                   <Text style={styles.description}><Feather name= "arrow-right-circle" size={18}  color= "#00427c"/> 9º ANO</Text>
              </TouchableOpacity>

         </View>
         </ScrollView>







        <View style = {styles.link}>
                <TouchableOpacity onPress={navigateBack}>
                  <Feather name = "arrow-left" size={28}  color="#004d91"/>
                </TouchableOpacity>
         </View>
       </View>

  )}
  />

</View>
    );

};
