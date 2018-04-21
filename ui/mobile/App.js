import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header } from 'react-native-elements';
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
      <ScrollView>
        <Header 
          backgroundColor={'#5a4099e6'}
          centerComponent={{text: 'BEST BUDDIES!', style: {color: '#fff' }}}
        />
        <Image 
          source={{uri:'https://www.bestbuddies.org/wp-content/uploads/2017/01/best-buddies-logo2.png'}}
          style={{ width: 100, height: 100, position: 'absolute' }}
          />
        <View style={styles.container}>
          <TouchableOpacity onPress={this.handleBuddiesClick}>
            <Text>You have X new buddies</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleVolunteersClick}>
            <Text>You have X new Volunteers</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9396cb4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#5a4099e6',
    height: 200
  }

});

export default StackNavigator ({
  Landing: { screen : App },
  Buddies: { screen: Buddies },
  Volunteers: { screen: Volunteers }
})