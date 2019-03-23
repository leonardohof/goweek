import React, { Component } from 'react';

import { View, 
        SafeAreaView,
        Text,
        TextInput,
        StyleSheet, 
        TouchableOpacity,
        AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';

// import styles from './styles';

goBack = () => {
  this.props.navigation.pop();
}

handleNewTweet = () => {
  const content = this.state.newTweet;
  const author = await AsyncStorage.getItem('@GoTwitter:username');

  await api.post('tweets', { content, author });

  this.goBack();
}

handleInputChange = newTweet => {
  this.setState({ newTweet });
}

export default class Newtweet extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    newTweet: '',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Icon name="close" size={24} color='#4BB0EE' />        
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.handleNewTweet}>
            <Text style={styles.buttonText}>Tweetar</Text>
          </TouchableOpacity>
        </View>

        <TextInput 
          style={styles.input}
          multiline 
          placeholder="No que você está pensando?"
          value={this.state.newTweet}
          onChange={this.handleInputChange}>
          placeholderTextColor='#999'
          returnKeyType='send'
          onSubmitEditing={this.handleNewTweet}>
        </TextInput>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#4BB0EE",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },

  input: {
    margin: 20,
    fontSize: 16,
    color: "#333"
  }
});

