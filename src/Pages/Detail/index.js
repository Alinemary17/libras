import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking, TextInput, Alert, AsyncStorage} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'
import styles from './styles';

export default class Detail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nome: '',
			login: '',
			senha: ''
		};
	}

	navigateBack() {
		this.props.navigation.goBack();
	}

	navigateToMenu() {
		this.props.navigation.navigate('Menu');
	}

	navigateToCadastro(){
	this.props.navigation.navigate('Cadastro');
	}

	fazerLogin() {
		Alert.alert('Fazendo login...')
		fetch('http://192.168.0.102:8080/login',{ method:'POST',
			headers:{ login: this.state.login,
				      senha: this.state.senha
			}
		}).then(res => res.json())

			.then(res => AsyncStorage.setItem('usuario', JSON.stringify(res)))
			.then(() => this.props.navigation.navigate('Menu'))
			.catch(() => Alert.alert('Login ou senha incorretos'))


	}



	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image style={{marginLeft: 60}} source={require('../../assets/logo.png')}/>
				</View>

				<View style={styles.incident}>
					<Text style={[styles.incidentProperty, {marginTop: 0}]}> LOGIN </Text>
					<TextInput style={styles.entrada} underlineColorAndroid="transparent" onChangeText={t => this.setState({login: t})}
							   placeholder="Digite seu login"/>

					<Text style={styles.incidentProperty}> SENHA </Text>
					<TextInput secureTextEntry={true} style={styles.entrada} underlineColorAndroid="transparent" onChangeText={t => this.setState({senha: t})}
							   placeholder="Digite sua senha"/>

					<View>
						<TouchableOpacity onPress={() => this.fazerLogin()} style={styles.botao}>
							<Text style={styles.botaoText}> LOGAR </Text>
						</TouchableOpacity>
					</View>


					<TouchableOpacity onPress={() => this.navigateToCadastro()}>
						<View>
							<Text style={styles.cadastra}> Cadastra-se aqui</Text>
						</View>
					</TouchableOpacity>


					<View style={styles.link}>
						<TouchableOpacity onPress={() => this.navigateBack()}>
							<Feather name="arrow-left" size={28} color="#004d91"/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.detailsButton1} onPress={() => this.navigateToMenu()}>
							<Feather name="arrow-right" size={28} color="#E02041"/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}