import React from 'react';

import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './Pages/Incidents';
import Detail from './Pages/Detail';
import Cadastro from './Pages/Cadastro';
import Menu from './Pages/Menu';
import EtapaI from './Pages/EtapaI';
import Cores  from './Pages/Cores';
import Azul from './Pages/Azul';
import Amarelo from './Pages/Amarelo';
import Verde from './Pages/Verde';
import Vermelho from './Pages/Vermelho';

export default function Routes(){
return(

/* faz as rotas         appstack = envolta das rotas*/
    <NavigationContainer>
       <AppStack.Navigator screenOptions ={{headerShown: false}}>
          <AppStack.Screen name = "Incidents" component = {Incidents}/>
          <AppStack.Screen name = "Detail" component = {Detail}/>
          <AppStack.Screen name = "Cadastro" component = {Cadastro}/>
          <AppStack.Screen name = "Menu" component = {Menu}/>
          <AppStack.Screen name = "EtapaI" component = {EtapaI}/>
          <AppStack.Screen name = "Cores"  component = {Cores}/>
          <AppStack.Screen name = "Azul" component = {Azul}/>
          <AppStack.Screen name = "Amarelo" component = {Amarelo}/>
          <AppStack.Screen name = "Verde" component = {Verde}/>
          <AppStack.Screen name = "Vermelho" component = {Vermelho}/>
       </AppStack.Navigator>
     </NavigationContainer>


);
}


