// THIS IS A PAGE 
import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PersonList from './PersonList';
import buddyData from '../mockdata/buddyData';

export default class Buddies extends React.Component {
  // request for Buddy data
  // for every item in the data, create a Person 
  
  render () {
    const title = 'Buddies'
    return (
      <ScrollView>
        <Text>{title}</Text>
        <PersonList buddies={buddyData} />
      </ScrollView>
    )
  }
}