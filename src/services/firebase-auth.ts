import auth from '@react-native-firebase/auth';

export class FirebaseAuth {
  public static async login(): Promise<boolean> {
    try {
      await auth().signInWithEmailAndPassword(
        'admin@sabonetes.com.br',
        'aBc12345678',
      );
      return Promise.resolve(true);
    } catch (err) {
      return false;
    }
  }
}
