import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import {
  SocialAuthentication,
  UserData,
} from './protocols/social-authentication';

export default class FacebookAuth implements SocialAuthentication {
  async login(): Promise<UserData | null> {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        console.log('Usuário cancelou o login');
        return null;
      }
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        console.log('Ocorreu um problema ao recuperar o token de acesso');
        return null;
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      const { user } = await auth().signInWithCredential(facebookCredential);

      return {
        email: user.email,
        name: user.displayName,
        photoUrl: user.photoURL,
        uid: user.uid,
      };
    } catch (err) {
      console.error('Facebook Login: ', err);
      return null;
    }
  }

  async logout(): Promise<boolean> {
    try {
      LoginManager.logOut();
      await auth().signOut();
      return true;
    } catch (err) {
      console.error('Facebook Logout: ', err);
      return false;
    }
  }
}
