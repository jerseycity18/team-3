import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Buddies from './components/Buddies';
import Volunteers from './components/Volunteers';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {}
  }
  
  handleBuddiesClick = () => {
    this.props.navigation.navigate('Buddies');
  }

  handleVolunteersClick = () => {
    this.props.navigation.navigate('Volunteers');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Best Buddies!</Text>
        <TouchableOpacity onPress={this.handleBuddiesClick}>
          <Text>You have X new buddies</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleVolunteersClick}>
          <Text>You have X new Volunteers</Text>
        </TouchableOpacity>
      </View>
    );
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

export default StackNavigator ({
  Landing: { screen : App },
  Buddies: { screen: Buddies },
  Volunteers: { screen: Volunteers }
})