import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import type { FirebaseConfig } from './firebase.config';

export class FirebaseAnalytics {
  constructor(public config: FirebaseConfig) {
    const firebaseConfig = this.config;
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
    let features = [
      'auth',
      'database',
      'firestore',
      'functions',
      'messaging',
      'storage',
      'analytics',
      'remoteConfig',
      'performance',
    ].filter((feature) => typeof (app as any)[feature] === 'function');
    console.log(`Firebase SDK loaded with ${features.join(', ')}`);
  }
}
