// THIS IS A PAGE 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PersonList from './PersonList';
// import volunteerData from '../mockdata/volunteerData'
import volunteerData from '../mockdata/volunteerData';

export default class Volunteers extends React.Component {
  
  // request for volunteer data
  // for every item in the data, create a Person   
  render () {
    const title = 'Volunteers'
    return (
      <ScrollView>
        <Text>{title}</Text>
        <PersonList buddies={volunteerData}/>
      </ScrollView >
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