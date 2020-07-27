import React from "react";
import { StyleSheet, Text } from "react-native";

type TimeDisplayProps = { seconds: number };

const TimeDisplay: React.FC<TimeDisplayProps> = (props) => {
  const pad = (num: number) => {
    return ("0" + num).slice(-2);
  };

  const mmss = (seconds: number) => {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  return <Text style={styles.secondText}>{mmss(props.seconds)}</Text>;
};

const styles = StyleSheet.create({
  secondText: {
    fontSize: 48,
    marginVertical: 30,
  },
});

export default TimeDisplay;
