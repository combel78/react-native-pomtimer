import React from "react";
import { StyleSheet, Text } from "react-native";

type TaskCountDisplayProps = { carriedPoms: number; pomodori: number };

const TaskCountDisplay: React.FC<TaskCountDisplayProps> = (props) => {
  const getPomStyle = () => {
    if (
      props?.carriedPoms &&
      props?.pomodori &&
      props?.carriedPoms > props?.pomodori
    ) {
      return true;
    }
    return false;
  };

  return (
    <React.Fragment>
      {getPomStyle() && (
        <Text style={[styles.taskCountTitle, styles.taskCountTitleRed]}>
          {props?.carriedPoms} / {props?.pomodori}
        </Text>
      )}
      {!getPomStyle() && (
        <Text style={styles.taskCountTitle}>
          {props?.carriedPoms} / {props?.pomodori}
        </Text>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  taskCountTitle: {
    fontSize: 36,
    color: "#004D00",
    fontWeight: "bold",
    marginVertical: 30,
  },
  taskCountTitleRed: {
    color: "#cc0000",
  },
});

export default TaskCountDisplay;
