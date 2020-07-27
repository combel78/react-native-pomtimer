import React from "react";
import moment from "moment";
import { StyleSheet, View, Text, AppState, Vibration } from "react-native";
import { Button, Appbar } from "react-native-paper";
import TimeDisplay from "./TimeDisplay";
import TaskCountDisplay from "./TaskCountDisplay";
import PomSoundPlayer from "../services/PomSoundPlayer";
import PomTaskService from "../services/PomTaskService";
import { useKeepAwake } from "expo-keep-awake";

const PomTimer: React.FC = ({ navigation }: any) => {
  //Bildschirm bleibt offen, wenn der Timer angezeigt wird
  useKeepAwake();
  const countdownSeconds = 1500;
  const [seconds, setSeconds] = React.useState(countdownSeconds);
  const [isActive, setIsActive] = React.useState(false);

  const [appState, setAppState] = React.useState(AppState.currentState);
  const [sleepTimestamp, setSleepTimestamp] = React.useState<any>("0");

  const [currTask, setCurrTask] = React.useState<PomTaskType>();

  /* Tasks bei Initialisierung der Komponente */
  React.useEffect(() => {
    //lade Aufgabe
    PomTaskService.loadTask(loadTaskCallback);
    //registriere AppStateChange
    AppState.addEventListener("change", handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  /* Callback zum Laden der Aufgabe */
  const loadTaskCallback = (data: PomTaskType) => {
    setCurrTask(data);
  };

  /* Timer-Steuerung */
  React.useEffect(() => {
    let interval: number = 0;
    if (isActive) {
      if (seconds <= 0) {
        handlePomEnde();
      }
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  /* Hintergrund-Verarbeitung */
  const handleAppStateChange = (state: any) => {
    setAppState(state);
  };

  React.useEffect(() => {
    if (appState === "active" && sleepTimestamp !== "0") {
      const duration = moment.duration(moment().diff(moment(sleepTimestamp)));
      setSeconds((seconds) => seconds - Math.floor(duration.asSeconds()));
      setSleepTimestamp("0");
      setIsActive(true);
    }
    if (appState !== "active") {
      if (seconds !== countdownSeconds) {
        setSleepTimestamp(moment().format());
        setIsActive(false);
      }
    }
  }, [appState]);

  /* Start-Button */
  const handleStart = () => {
    setIsActive(true);
  };

  /* Pause-Button */
  const handlePause = () => {
    setIsActive(false);
  };

  /* POM-Ende */
  const handlePomEnde = () => {
    PomTaskService.addFinishedPom();
    if (currTask) {
      currTask.carriedPoms++;
    }
    setSleepTimestamp("0");
    setSeconds(countdownSeconds);
    setIsActive(false);
    PomSoundPlayer.playPomEndSound();
    Vibration.vibrate([500, 500, 500]);
  };

  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.Content title="Pomodoro Manager" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text style={styles.title}>{currTask?.todo}</Text>
        <Text style={styles.subTitle}>{currTask?.description}</Text>
        <TimeDisplay seconds={seconds} />
        <View style={styles.buttonWrapper}>
          {!isActive && (
            <React.Fragment>
              <Button mode="outlined" icon="play" onPress={handleStart}>
                Start
              </Button>
              <Button
                mode="outlined"
                icon="stop"
                onPress={() => navigation.push("PomTask")}
              >
                Zur Aufgabe
              </Button>
            </React.Fragment>
          )}
          {isActive && (
            <Button mode="outlined" icon="pause" onPress={handlePause}>
              Pause
            </Button>
          )}
        </View>
        <TaskCountDisplay
          carriedPoms={currTask?.carriedPoms || 0}
          pomodori={currTask?.pomodori || 0}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 17,
    color: "#14141F",
  },
  buttonWrapper: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  secondText: {
    fontSize: 25,
    marginVertical: 30,
  },
});

export default PomTimer;
