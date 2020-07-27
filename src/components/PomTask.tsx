import * as React from "react";
import { TextInput, Button, Appbar } from "react-native-paper";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import PomTaskService from "../services/PomTaskService";
import TaskCountDisplay from "./TaskCountDisplay";

const MAX_LENGTH_AUFGABE = 100;
const MAX_LENGTH_BESCHREIBUNG = 200;
const MAX_LENGTH_POMODORI = 2;

const PomTask: React.FC = ({ navigation }: any) => {
  const [aufgabe, setAufgabe] = React.useState("");
  const [beschreibung, setBeschreibung] = React.useState("");
  const [carriedPoms, setCarriedPoms] = React.useState(0);
  const [poms, setPoms] = React.useState(0);

  React.useEffect(() => {
    PomTaskService.loadTask(loadTaskCallback);
  }, []);

  const handleChangeText = (element: string, text: string) => {
    switch (element) {
      case "aufgabe": {
        setAufgabe(text);
        break;
      }
      case "beschreibung": {
        setBeschreibung(text);
        break;
      }
      case "pomodori": {
        setPoms(Number(text));
        break;
      }
    }
  };

  const loadTaskCallback = (data: PomTaskType) => {
    setAufgabe(data.todo);
    setBeschreibung(data.description);
    setCarriedPoms(data.carriedPoms);
    setPoms(data.pomodori);
  };

  const handleSave = () => {
    const saveTaskObject: PomTaskType = {
      todo: aufgabe,
      description: beschreibung,
      pomodori: poms,
      carriedPoms: 0,
    };
    PomTaskService.storeTask(saveTaskObject);
    alert("Aufgabe gespeichert.");
  };

  const handleResetCarriedPoms = () => {
    PomTaskService.resetCarriedPoms();
    setCarriedPoms(0);
  };

  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.Content title="Pomodoro Manager" />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <Text style={styles.headline}>Aktuelle Aufgabe</Text>
        <Text style={styles.subheadline}>
          Geben Sie hier einen Name Ihrer Aufgabe, eine Beschreibung und die
          Anzahl der benötigten Pomodori an.
        </Text>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Aufgabe"
          value={aufgabe}
          maxLength={MAX_LENGTH_AUFGABE}
          onChangeText={(text) => handleChangeText("aufgabe", text)}
        />
        <TextInput
          style={[styles.textInput]}
          mode="outlined"
          label="Beschreibung"
          value={beschreibung}
          maxLength={MAX_LENGTH_BESCHREIBUNG}
          onChangeText={(text) => handleChangeText("beschreibung", text)}
        />
        <View style={{ flex: 2, flexDirection: "row" }}>
          <TextInput
            style={[styles.textInput, styles.textInputNumeric]}
            mode="outlined"
            label="Pomodori"
            value={poms.toString()}
            keyboardType="numeric"
            maxLength={MAX_LENGTH_POMODORI}
            onChangeText={(text) => handleChangeText("pomodori", text)}
          />
          <View style={styles.taskCountDisplayStyle}>
            <TaskCountDisplay carriedPoms={carriedPoms} pomodori={poms} />
          </View>
          <Button
            style={[styles.taskCountDisplayStyle, { marginTop: 36 }]}
            onPress={handleResetCarriedPoms}
          >
            Zurücksetzen
          </Button>
        </View>
        <Button
          style={styles.startPOMButton}
          icon="disc"
          mode="contained"
          onPress={handleSave}
        >
          speichern
        </Button>
        <Button
          style={styles.startPOMButton}
          icon="clock"
          mode="contained"
          onPress={() => navigation.push("PomTimer")}
        >
          POM starten
        </Button>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  headline: {
    padding: 14,
    paddingLeft: 10,
    fontSize: 24,
  },
  subheadline: {
    padding: 14,
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  taskCountDisplayStyle: {
    marginLeft: 30,
  },
  textInput: {
    paddingTop: 12,
  },
  textInputNumeric: {
    width: 100,
  },
  startPOMButton: {
    marginTop: 24,
  },
});

export default PomTask;
