import { FirebaseAnalytics } from './firebase.analytics';
import { FirebaseConfig } from './firebase.config';

export class Analytics {
  constructor() {
    new FirebaseAnalytics(
      new FirebaseConfig({
        apiKey: 'AIzaSyDzaxOkgRHZTHIF7x1ML0-vYNeQSIXtjYU',
        authDomain: 'cesperanca-63ca1.firebaseapp.com',
        projectId: 'cesperanca-63ca1',
        storageBucket: 'cesperanca-63ca1.firebasestorage.app',
        messagingSenderId: '1092914153349',
        appId: '1:1092914153349:web:559fa76e2e496855db66ec',
        measurementId: 'G-DR1NQRMRD6',
      }),
    );
  }
}
