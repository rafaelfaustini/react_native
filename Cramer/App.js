/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ToolbarAndroid
} from 'react-native';


type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <ToolbarAndroid
        style={styles.toolbar}
        title="Cramer"
        onActionSelected={this.onActionSelected}
        titleColor= "#FFF"
        actions = {[
          {title: "Opções", show: "never"}
        ]}
        />
        <Text style={styles.welcome}>
          Equação do Segundo Grau
        </Text>
        <Text style={styles.coeficientes}>
          Valor de a:
        </Text>
        <TextInput
          style={{height: 40,marginLeft: 20, marginRight: 20}}
          onChangeText={(text) => this.setState({input: text})}
        />
        <Text style={styles.coeficientes}>
          Valor de b:
        </Text>
        <TextInput
          style={{height: 40,marginLeft: 20, marginRight: 20}}
          onChangeText={(text) => this.setState({input: text})}
        />
        <Text style={styles.coeficientes}>
          Valor de c:
        </Text>
        <TextInput
          style={{height: 40,marginLeft: 20, marginRight: 20}}
          onChangeText={(text) => this.setState({input: text})}
        />
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    alignSelf: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  coeficientes: {
    marginLeft: 25,
    marginTop: 10,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});
