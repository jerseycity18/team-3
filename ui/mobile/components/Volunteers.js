// THIS IS A PAGE 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PersonList from './PersonList';
import volunteerData from '../mockdata/volunteerData'

export default class Volunteers extends React.Component {
  
  // request for volunteer data
  // for every item in the data, create a Person   
  render () {
    
    return (
      <Text>List of Volunteers</Text>
      
    ) 
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });