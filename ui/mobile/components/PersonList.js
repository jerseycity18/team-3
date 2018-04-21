// This gets reused for Volunteers and Buddies 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Person from './Person';

export default class PersonList extends React.Component {
    constructor (props) {
      super (props)
    }
    // pass in the list of people through props 
    componentDidMount () {
   
    }
  
    render () {
      return (
        // FOR EVERY ITEM IN THE DATA PASSED THROUGH PROPS, RENDER A PERSON
        <View>
          <Text>List of Either Buddy or Volunteer</Text>
          {
            this.props.buddies.map(e => 
              <Person qualities={e} key={e.id}/>
            )
          }
        </View>
        
        
      ) 
    }
  }