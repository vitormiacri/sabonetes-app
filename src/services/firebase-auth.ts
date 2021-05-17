import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { FB_AUTH_USERNAME, FB_AUTH_PASSWORD, WEB_CLIENT_ID } from '@env';
import { UserData } from '../context/auth-context';

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

  public static async loginWithGoogle(): Promise<UserData | null> {
    try {
      GoogleSignin.configure({
        webClientId: `${WEB_CLIENT_ID}`,
      });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const { user } = await auth().signInWithCredential(googleCredential);

      return Promise.resolve({
        email: user.email,
        name: user.displayName,
        photoUrl: user.photoURL,
        uid: user.uid,
      });
    } catch (err) {
      console.error('Google Login: ', err);
      return null;
    }
  }

  public static async logoutGoogle(): Promise<boolean> {
    try {
      GoogleSignin.configure({
        webClientId: `${WEB_CLIENT_ID}`,
      });
      await GoogleSignin.signOut();
      await auth().signOut();
      return Promise.resolve(true);
    } catch (err) {
      console.error('Google Logout: ', err);
      return false;
    }
  }
}
