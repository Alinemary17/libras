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
 alignItems: 'center'
  },

  title:{
  fontSize: 25,
  marginBottom: 7,
  marginTop: 7,
  color: '#13131a',
  fontWeight: 'bold',
  alignSelf: "center",
  },

   description:{
   fontSize:18,
   lineHeight: 20,
   color: '#737380',
   alignSelf: "center",
   },

   boxImage:{
   flexDirection: "row",
   justifyContent: 'space-between'
   },



   prof:{
    width: 170,
    height: 215,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',


    },

    alunos:{
     width: 170,
     height: 215,
     marginTop: 20,
     marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

   },

   incidentList:{
   marginTop: 32,
   /*flexDirection: 'row',*/

   },

   incident: {
   padding: 24,
   borderRadius: 8,
   backgroundColor: '#FFF',
   marginBottom: 16
   },

   /*incident: {
   padding: 24,
   borderRadius: 8,
   backgroundColor: '#FFF',
   marginBottom: 16
   }
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

 /*detailsButton1:{
   display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  detailsButtonText1:{
 marginRight: 5,
  color: '#FF0000'
  },*/






