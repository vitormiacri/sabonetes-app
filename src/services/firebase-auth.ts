import auth from '@react-native-firebase/auth';
import { FB_AUTH_USERNAME, FB_AUTH_PASSWORD } from '@env';

export class FirebaseAuth {
  public static async login(): Promise<boolean> {
    try {
      await auth().signInWithEmailAndPassword(
        `${FB_AUTH_USERNAME}`,
        `${FB_AUTH_PASSWORD}`,
      );
      return Promise.resolve(true);
    } catch (err) {
      return false;
    }
  }
}
