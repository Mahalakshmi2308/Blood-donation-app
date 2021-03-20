import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BloodRequestScreen from './RequestScreen';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'red'}
            centerComponent={{
              text: 'Blood Donation',
              style: { color: 'white', fontSize: 15 },
            }}           
          />
           <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8f916842e1836544ea5061fe66234163',
          }}
        />
          <View>
            <TextInput placeholder="Email" style={styles.textInput} />            

            <TextInput placeholder="Address" style={styles.textInput} />

            <TextInput placeholder="contact" style={styles.textInput} />

            <TextInput placeholder="Password" style={styles.textInput} />

            <TextInput placeholder="Confirm Password" style={styles.textInput} />

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('DonateBlood');
              }}
              style={[styles.button, { marginBottom: 20, marginTop: 20 }]}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA8072',
  },
  textInput: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#ff8a65',
    fontSize: 20,
    margin: 20,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FF0000',
    shadowColor: '#000',
  },
  imageIcon: {
    width: 50,
    height: 50,
    marginLeft: 140,
  }
});
