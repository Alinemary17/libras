import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
   container:{
   flex: 1,
   paddingHorizontal:24,
   paddingTop: Constants.statusBarHeight +20,
   },

   header:{
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginLeft: 100,

   },

   incident:{
     padding: 24,
     borderRadius: 8,
     backgroundColor: '#FFF',
     marginBottom: 16,
     marginTop:10
   },

   incidentProperty:{
     fontSize: 20,
     color: '#004d91',
     fontWeight: 'bold',
     marginTop: 8
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

    cadastra:{
      marginTop: 20,
      /*color: '#D8D8D8',*/
      color: '#004d91',
      backgroundColor:"transparent",
      textAlign: "right",
      paddingRight: 15,
      fontSize: 15
    },

    link:{
      flexDirection: 'row',
       justifyContent: 'space-between',
       marginTop: 40

       },

   detailsButton1:{
     display: 'flex',
     alignItems: 'flex-end',
     justifyContent: 'center',
   },

   });

