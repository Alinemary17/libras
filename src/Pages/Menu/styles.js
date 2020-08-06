import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
/* constants = são fixas pra cada projeto*/

export default StyleSheet.create({
   container:{
   flex: 1,
   paddingHorizontal: 5,
   paddingTop: Constants.statusBarHeight +20
   },

  header:{
 /*colocando row fica um do lado do outro*/
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop:2,
  marginLeft: 40
  },

 boxImage:{
   flexDirection: "row",
   justifyContent: 'space-between'
   },

   subtitle:{
  fontSize: 20,
  marginBottom: 5,
  marginTop:10,
  /*color: '#004d91',*/
  color: '#0000FF',
  fontWeight: 'bold',
  marginRight: 80
  },

  title:{
  fontSize: 25,
  marginBottom: 5,
  /*marginTop: 0, parte de cima*/
  color: '#004d91',
  fontWeight: 'bold',
  alignSelf: "center",
  },

  subtitle:{
  fontSize: 15,
  marginBottom: 7,
  color: '#004d91',
  textAlign: 'center'
  },

   description:{
   fontSize:18,
   lineHeight: 20,
   color: '#00427c',
   marginBottom: 10,
   },

   boxImage:{
   flexDirection: "row",
   justifyContent: 'space-between'
   },



   incidentList:{
   marginTop: 10,
   /*flexDirection: 'row',*/

   },

   incident: {
   padding: 24,
   borderRadius: 8,
   backgroundColor: '#FFF',
   marginBottom: 16,
   marginTop:-10
   },



   /*
   incidentProperty: {
   fontSize: 14,
   color: '#41414d',
   fontWeight: 'bold'
   },

   incidentValue:{
   marginTop: 8,
   fontSize: 15,
   marginBottom: 24,
   color: '#737380'
   },*/





   /*detailsButton:{
   flexDirection: 'row',
   justifyContent: 'flex-start',
   /*alignItems: 'center'
   alignSelf: "auto"

   },

   detailsButton1:{
      flexDirection: 'row',
      justifyContent: 'flex-end',
      /*alignItems: 'center',
      alignSelf: "auto"
      alignContent: 'stretch'

      },

   detailsButtonText:{
   color: '#E02041',
   fontSize: 15,
   fontWeight: 'bold',
   justifyContent: 'space-between',
   flexDirection: 'row',
   paddingHorizontal: 5,

   },

   detailsButtonText1:{
      color: '#E02041',
      fontSize: 15,
      fontWeight: 'bold',
      justifyContent: 'space-between',
      marginBottom: 20,
      flexDirection: 'row'
  },*/

link:{
  flexDirection: 'row',
   justifyContent: 'space-between',

   },

   detailsButton:{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',


       },

      detailsButtonText:{
       marginLeft: 25,
       color: '#FF0000',
       fontSize: 18



      },

        detailsButton1:{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',


         },

        detailsButtonText1:{
        marginRight: 40,
        color: '#FF0000',
        fontSize: 18
        },


  });

 /*detailsButtonText1:{
 marginRight: 5,
  color: '#FF0000'
  },*/






