import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
   container:{
   flex: 1,
   paddingHorizontal:10,
   paddingTop: Constants.statusBarHeight +20,
   },

   incident:{
   padding: 20,
   borderRadius: 10,
   backgroundColor: '#FFF',
   marginBottom: 16,
   marginTop:2
   },

    title:{
     fontSize: 25,
     marginBottom: 5,
     /*marginTop: 0, parte de cima*/
     color: '#004d91',
     fontWeight: 'bold',
     alignSelf: "center",
     },

   incidentProperty:{
   fontSize: 20,
   color: '#41414d',
   fontWeight: 'bold',
   marginTop: 24
   },

   /*incidentValue: {
   marginTop: 8,
   fontSize: 15,
   color: '#737380'
   },*/



   /*heroTitle:{
   fontWeight: 'bold',
   fontSize: 20,
   color: '#13131a',
   lineHeight: 30
   },*/

   entrada:{
   padding:5,
   width: 250,
   height: 40,
   borderColor: 'gray',
   borderWidth: 0,
   backgroundColor: 'white',
   borderWidth: 1,
   marginTop: 10
   },

   /*principal:{
   backgroundColor:'#91b8da',
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
   },*/

   botao:{
   backgroundColor: '#004d91',
   paddingVertical: 10,
   paddingHorizontal: 20,
   marginTop: 20,
   borderRadius: 8,
   height: 40,
   width: '48%',
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: '25%',

    },

    botaoText:{
    color: '#FFFFFF',
    fontWeight:'bold',
    fontSize: 15

    },



  boxImage:{
   flexDirection: "row",
   justifyContent: 'space-between'
   },
 cores:{
    /*width: 170,
    height: 215,*/
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',


    },

    coletores:{
     /*width: 170,
     height: 215,*/
     marginTop: 20,
     marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

   },


   });

