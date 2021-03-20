import React,{Component} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native';
import { Header } from 'react-native-elements';
import SafeAreaProvider from 'react-native-safe-area-context';

export default class DonateScreen extends React.Component{
    render(){
    return(      
      <View style={styles.container}>      
      <Text style={styles.header}>Blood Donating
       <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d1151f7360a4c1b6a2c2557d1cf75c6',
          }}
        />
      </Text>
      <TextInput 
      placeholder="Which kind of blood group"
      style={styles.textInput}/>
      <TextInput 
      placeholder="Why do you want to donate"
      style={styles.textInput}/>  
      <TouchableOpacity
      onPress={this.next}
            style={[styles.button,{marginBottom:20, marginTop:20}]}>            
            <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>   
      
      </View> 
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcccb',
  },
   textInput: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:20,
    paddingLeft:10 
   },
    button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#FF0000",
    shadowColor: "#000",    
  },
  header:{
  padding: 30,
  justifyContent: 'center',
  background: '#FF0000',
  color: 'white',
  fontSize: 30,
},
imageIcon: {
    width: 50,
    height: 50,
    marginLeft: 100,
  }
})