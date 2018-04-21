// YOUR CORE COMPONENT 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Person extends React.Component {
  constructor(props) {
    super(props)
  }
  ///
  render () {
      return (
        <View style={styles.container}>
          <Text>{this.props.qualities.first_name}</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 100, 
      backgroundColor: '#947fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });