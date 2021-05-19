import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  SocialAuthentication,
  UserData,
} from './protocols/social-authentication';
import { WEB_CLIENT_ID } from '@env';

export default class GoogleAuth implements SocialAuthentication {
  webClientId: string;

  constructor() {
    this.webClientId = WEB_CLIENT_ID;
  }

  private configure() {
    GoogleSignin.configure({
      webClientId: this.webClientId,
      scopes: ['email', 'profile'],
    });
  }

  async login(): Promise<UserData | null> {
    try {
      this.configure();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const { user } = await auth().signInWithCredential(googleCredential);

      return {
        email: user.email,
        name: user.displayName,
        photoUrl: user.photoURL,
        uid: user.uid,
      };
    } catch (err) {
      console.error('Google Login: ', err);
      return null;
    }
  }

  async logout(): Promise<boolean> {
    try {
      this.configure();
      await GoogleSignin.signOut();
      await auth().signOut();
      return true;
    } catch (err) {
      console.error('Google Logout: ', err);
      return false;
    }
  }
}
