import { Audio } from "expo-av";

class PomSoundPlayer {
  public playPomEndSound = async () => {
    const soundObject = new Audio.Sound();
    try {
      await Audio.setAudioModeAsync({
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      });
      await soundObject.loadAsync(require("../../assets/reminder.mp3"));
      await soundObject.playAsync();
    } catch (error) {
      console.log("Fehler beim Abspielen der Pom-Ende-Erinnerung!");
    }
  };
}

export default new PomSoundPlayer();
