import React, {useState} from 'react';
import {View,Text, Image,TouchableOpacity, Linking, TextInput, Alert} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';



import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Detail(){
    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const botaoPressionado = () => {
    Alert.alert ('Fazendo login...');
     }




    const navigation = useNavigation();
    const message = 'Seja bem vindo ao aplicativo Libras para Língua Portuguesa';

    function navigateBack(){
    navigation.goBack()
    }

    function navigateToDetail(){
       navigation.navigate('Detail')
    }

	function botaoCadastra() {
		Alert.alert('Cadastrando...');
		fetch('http://192.168.0.102:8080/cadastro',{
			method: 'POST',
			headers:{
				nome: nome,
				login: login,
				senha: senha
			}
		})

			.then(() => navigation.navigate('Detail'))
			/*.catch(() => Alert.alert('Erro ao cadastrar'))*/
			.catch(err => console.warn(err))
	}


    return(
 <View style={styles.container}>


   <View style={styles.incident}>

    <Image style={styles.header}
                       source = {require('../../assets/iconeTela.png')} resizeMode= "contain"/>
       <Text style={[styles.incidentProperty, {marginTop: 0}]}> NOME</Text>
       <TextInput style={styles.entrada}
       underlineColorAndroid = "transparent" placeholder = "Digite seu nome" onChangeText={t => setNome(t)}/>

       <Text style={styles.incidentProperty}> LOGIN </Text>
        <TextInput secureTextEntry={true}  style={styles.entrada}
        underlineColorAndroid = "transparent" placeholder= "Digite seu login" onChangeText={t => setLogin(t)} />

        <Text style={styles.incidentProperty}> SENHA </Text>
        <TextInput secureTextEntry={true}  style={styles.entrada}
         underlineColorAndroid = "transparent" placeholder= "Digite sua senha" onChangeText={t => setSenha(t)}/>

         <View>
            <TouchableOpacity onPress = {botaoCadastra} style = {styles.botao}>
             <Text style = {styles.botaoText} >CADASTRAR </Text>
            </TouchableOpacity>
          </View>


             <TouchableOpacity onPress = {botaoCadastra}>
                   <View>
                   <Text style = {styles.cadastra}> Cadastra-se aqui</Text>
                   </View>
             </TouchableOpacity>




         <View style = {styles.link}>
          <TouchableOpacity onPress={navigateBack}>
          <Feather name = "arrow-left" size={28}  color="#004d91"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailsButton1}
           onPress={navigateToDetail}>
           <Feather name= "arrow-right" size={28}  color= "#E02041"/>
          </TouchableOpacity>
         </View>
    </View>

 </View>
     );

    }