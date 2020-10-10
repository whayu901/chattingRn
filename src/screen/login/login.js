import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  View,
  PermissionsAndroid,
  Text,
  Alert,
  Button,
} from "react-native";

export async function request_READ_PHONE_STATE() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      {
        title: "ReactNativeCode wants to READ_PHONE_STATE",
        message: "ReactNativeCode App needs access to your personal data. ",
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("Permission Granted.");
    } else {
      Alert.alert("Permission Not Granted");
    }
  } catch (err) {
    console.warn(err);
  }
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      device_IMEI: "",
    };
  }

  async componentDidMount() {
    await request_READ_PHONE_STATE();
  }

  get_IMEI_Number = () => {
    const IMEI = require("react-native-imei");

    var IMEI_2 = IMEI.getImei();
    console.log("IMEI", IMEI_2);

    this.setState({ device_IMEI: IMEI_2 });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: "center", marginBottom: 20, fontSize: 20 }}>
          {" "}
          {this.state.device_IMEI}{" "}
        </Text>

        <Button
          title="Click Here to Get Device IMEI Number"
          onPress={this.get_IMEI_Number}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
