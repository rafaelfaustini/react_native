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
  Dimensions,
  ScrollView,
  StatusBar,
  ToolbarAndroid
} from 'react-native';
var tempo=0;
function timer(){
tempo++;

}
setInterval(timer, 1000);

var treino = "Andar";
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView>
      <StatusBar backgroundColor="#2196F3"
      animated={true}
      />
      <ToolbarAndroid
        style={styles.toolbar}
        title="Snizer Hiit"
        onActionSelected={this.onActionSelected}
        titleColor= "#FFF"
        actions = {[
          {title: "Treinos", show: "never"}
        ]}
        />
        <Text style={styles.treino}>
        {treino}
        </Text>
        <Text style={styles.cronometro}>
          {tempo}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    alignSelf: 'stretch',
  },
  cronometro: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  treino: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});
