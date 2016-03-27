'use strict'

var React = require('react-native');
var { StyleSheet, Text, TouchableOpacity, View } = React;

var Button = React.createClass({
  render: function() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  buttonText: {
    color: '#105B63',
    alignSelf: 'center',
    fontSize: 18
  },
  button: {
    height: 36,
    backgroundColor: '#FFD34E',
    borderColor: '#FFD34E',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = Button
