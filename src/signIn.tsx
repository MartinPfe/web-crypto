import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { FirebaseAuth } from './firebase';

export const signInWithGoogle = async (): Promise<User | null> => {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/drive');
  try {
    const result = await signInWithPopup(FirebaseAuth, provider);
    return result.user;
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    return null;
  }
};
