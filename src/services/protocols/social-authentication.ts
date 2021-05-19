export type UserData = {
  uid: string;
  photoUrl: string;
  name: string;
  email: string;
};

export interface SocialAuthentication {
  login(): Promise<UserData>;
  logout(): Promise<boolean>;
}
