let React = require('react-native')
let SplashScreen = require('./lib/components/SplashScreen.ios.js')

let {
  Component,
  Navigator,
  AppRegistry
} = React

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Do Your Part', component: SplashScreen}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
       />
    )
  }
}

AppRegistry.registerComponent('doyourpart', () => App)
