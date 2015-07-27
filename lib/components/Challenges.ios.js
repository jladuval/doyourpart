let React = require('react-native')

let {
  AppRegistry,
  Image,
  Text,
  View,
  Component,
  Stylesheet,
  ListView,
  TouchableHighlight
} = React

class Challenges extends Component {
  // constructor(props) {
  //   super(props)
  //   let dataSource = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1.id !== r2.id
  //   })
  //   this.state = {
  //     dataSource: dataSource.cloneWithRows(this.props.challenges)
  //   }
  // }

  renderChallenge(challenge, sectionId, rowId) {
    return (
      <TouchableHighlight underlayColor='#dddddd'>
        <View>
          <Text>{challenge.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow = {this.renderChallenge.bind(this)} />
    )
  }
}

module.exports = Challenges
