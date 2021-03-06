'use strict';

var React = require('react-native');
var Button = require('./button');
var FadeInView = require('./fade_in_view');
var { Modal, StyleSheet, TouchableOpacity, View} = React;

var ActionModal = React.createClass({
  render: function() {
      var actionButton = null;
      if (this.props.actionButtonText) {
          actionButton = (
              <Button onPress={this.props.onAction} text={this.props.actionButtonText} />
          );
      }

    return (
      <FadeInView visible={this.props.modalVisible} backgroundColor={this.props.backgroundColor}>
        <Modal
          animated={true}
          transparent={true}
          visible={this.props.modalVisible}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.container} onPress={this.props.onCancel}></TouchableOpacity>
            {this.props.children}
            <View style={{height:8}}/>
            {actionButton}
            <Button onPress={this.props.onDone || this.props.onCancel} text={this.props.buttonText || "Done"} />
          </View>
        </Modal>
      </FadeInView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    padding: 8,
    paddingBottom: 0,
    justifyContent: "flex-end"
  }
});

module.exports = ActionModal;
