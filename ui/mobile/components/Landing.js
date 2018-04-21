import { React } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Landing extends React.Component {
  constructor (props) {
    super(props)
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
          <Text>You have X new volunteers</Text>
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
