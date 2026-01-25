export class FirebaseConfig {
  public apiKey: string = '';
  public authDomain: string = '';
  public projectId: string = '';
  public storageBucket: string = '';
  public messagingSenderId: string = '';
  public appId: string = '';
  public measurementId: string = '';
  constructor(values: FirebaseConfig) {
    Object.assign(this, values);
  }
}
