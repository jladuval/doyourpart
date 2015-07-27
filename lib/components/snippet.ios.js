let React = require('react-native')
let listChallenges = require('./lib/components/listChallenges.ios.js')

const MockedData = [
   {
     title: 'Title',
     year: '2015',
     posters: {
       thumbnail: 'http://i.imgur.com/UePbdph.jpg'
     }
   }
]

let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React

let doyourpart = React.createClass({
  render: () => {
    let movie = MockedData[0]
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail}  source={{ uri: movie.posters.thumbnail }} />
        <View style={styles.rightContainer}>
          <Text>{ movie.title }</Text>
          <Text>{ movie.year }</Text>
        </View>
      </View>
  )}
})

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 100,
    height: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

setTimeout(() => {this.props.navigator.push({
  title: 'Select Challenge',
  component: ListChallenges,
  passProps: {challenges: []}
})}, 5000)

AppRegistry.registerComponent('doyourpart', () => doyourpart)
