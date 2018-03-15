import React from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const colorArr = ["blue", "green", "yellow", "red"];

class ControlBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    for (let i = 0; i < colorArr.length; i++) {
      if (i < 3) {
        this.setState({ index: colorArr[i] });
      } else {
        this.setState({ index: 0 });
      }
    }
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.handleButton}
        style={[
          styles.btnClickContain,
          { backgroundColor: colorArr[this.state.index] }
        ]}
      >
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}> </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class App extends React.Component {

  render() {
    return (
      <Grid>
        <Row>
          <ControlBox title="Box-1" />
          <ControlBox title="Box-2" />
        </Row>
        <Row>
          <ControlBox title="Box-3" />
          <ControlBox title="Box-4" />
        </Row>
        <Row>
          <ControlBox title="Box-5" />
          <ControlBox title="Box-6" />
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  btnClickContain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
    backgroundColor: null,
    borderRadius: 5,
    padding: 5,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 15
  },
  btnText: {
    fontSize: 18,
    color: "#FAFAFA",
    textAlign: "center",
    alignSelf: "center"
  }
});
