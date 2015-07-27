let React = require('react-native')
let Test = require('./Test.ios.js')

let {
  Component,
  View,
  Text
} = React

class SplashScreen extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <View>
        <Text>Foo</Text>
        <Text onPress={this.onPressChallenges.bind(this)}>
          Go to Challenges!
        </Text>
      </View>
    )
  }

  onPressChallenges() {
    this.props.navigator.push({
      name: 'Test',
      component: Test 
    })
  }

}

module.exports = SplashScreen
