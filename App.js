import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      defaultColor1: "grey",
      isTrue1: true,
      defaultColor2: "grey",
      isTrue2: true,
      defaultColor3: "grey",
      isTrue3: true,
      defaultColor4: "grey",
      isTrue4: true,
    };
  }

  updateColor1() {
    if (this.state.isTrue1 === true) {
      this.setState({
        defaultColor1: "blue",
        isTrue1: false,
      });
    } else {
      this.setState({
        defaultColor1: "grey",
        isTrue1: true,
      });
    }
  }
  updateColor2() {
    if (this.state.isTrue2 === true) {
      this.setState({
        defaultColor2: "black",
        isTrue2: false,
      });
    } else {
      this.setState({
        defaultColor2: "grey",
        isTrue2: true,
      });
    }
  }
  updateColor3() {
    if (this.state.isTrue3 === true) {
      this.setState({
        defaultColor3: "orange",
        isTrue3: false,
      });
    } else {
      this.setState({
        defaultColor3: "grey",
        isTrue3: true,
      });
    }
  }
  updateColor4() {
    if (this.state.isTrue4 === true) {
      this.setState({
        defaultColor4: "purple",
        isTrue4: false,
      });
    } else {
      this.setState({
        defaultColor4: "grey",
        isTrue4: true,
      });
    }
  }

  render() {
    return (
      <View style={stylesBackground.container}>
        <View style={stylesBackground.leftContainer}>
          <View style={button.buttonPosition1}>
            <Button
              title="Button 1"
              color="green"
              onPress={() => this.updateColor1()}
            />
          </View>
          <View style={button.buttonPosition2}>
            <Button
              title="Button 2"
              color="green"
              onPress={() => this.updateColor2()}
            />
          </View>
          <View style={button.buttonPosition3}>
            <Button
              title="Button 3"
              color="green"
              onPress={() => this.updateColor3()}
            />
          </View>
          <View style={button.buttonPosition4}>
            <Button
              title="Button 4"
              color="green"
              onPress={() => this.updateColor4()}
            />
          </View>
        </View>
        <View style={stylesBackground.rightContainer}>
          <View
            style={{
              backgroundColor: this.state.defaultColor1,
              width: 100,
              height: 50,
              left: 50,
              flex: 1,
              marginVertical: 60,
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 15,
              }}
            >
              BOX1
            </Text>
          </View>
          <View
            style={{
              backgroundColor: this.state.defaultColor2,
              width: 100,
              height: 80,
              left: 50,
              flex: 1,
              marginVertical: 60,
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 15,
              }}
            >
              BOX2
            </Text>
          </View>
          <View
            style={{
              backgroundColor: this.state.defaultColor3,
              width: 100,
              height: 50,
              left: 50,
              flex: 1,
              marginVertical: 60,
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 15,
              }}
            >
              BOX3
            </Text>
          </View>
          <View
            style={{
              backgroundColor: this.state.defaultColor4,
              width: 100,
              height: 50,
              left: 50,
              flex: 1,
              marginVertical: 60,
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 15,
              }}
            >
              BOX3
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const stylesBackground = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "space-around",
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
});

const button = StyleSheet.create({
  buttonPosition1: {
    position: "relative",
    width: 100,
    height: 180,
    left: 50,
    justifyContent: "center",
  },
  buttonPosition2: {
    position: "relative",
    width: 100,
    height: 180,
    left: 50,
    justifyContent: "center",
  },
  buttonPosition3: {
    position: "relative",
    width: 100,
    height: 180,
    left: 50,
    justifyContent: "center",
  },
  buttonPosition4: {
    position: "relative",
    width: 100,
    height: 180,
    left: 50,
    justifyContent: "center",
  },
});
