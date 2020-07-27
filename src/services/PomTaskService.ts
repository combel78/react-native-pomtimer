import AsyncStorage from "@react-native-community/async-storage";

class PomTaskService {
  public storeTask = async (pomTask: PomTaskType) => {
    try {
      const jsonValue = JSON.stringify(pomTask);
      await AsyncStorage.mergeItem("@pomTask", jsonValue);
    } catch (e) {
      alert("Fehler beim Speichern der Aufgabe!");
    }
  };

  public loadTask = async (loadTaskCallback: any) => {
    try {
      const jsonValue = await AsyncStorage.getItem("@pomTask");
      if (jsonValue != null) {
        loadTaskCallback(JSON.parse(jsonValue));
      }
    } catch (e) {
      alert("Fehler beim Laden der Aufgabe!");
    }
  };

  public addFinishedPom = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem("@pomTask");
      if (jsonValue != null) {
        let currPomTask: PomTaskType = JSON.parse(jsonValue);
        currPomTask.carriedPoms++;
        jsonValue = JSON.stringify(currPomTask);
        await AsyncStorage.mergeItem("@pomTask", jsonValue);
      }
    } catch (e) {
      alert("Fehler beim Aktualisieren der Aufgabe bei POM-Ende!");
    }
  };

  public resetCarriedPoms = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem("@pomTask");
      if (jsonValue != null) {
        let currPomTask: PomTaskType = JSON.parse(jsonValue);
        currPomTask.carriedPoms = 0;
        jsonValue = JSON.stringify(currPomTask);
        await AsyncStorage.mergeItem("@pomTask", jsonValue);
      }
    } catch (e) {
      alert("Fehler beim Zurücksetzen der Aufgabe!");
    }
  };
}

export default new PomTaskService();
