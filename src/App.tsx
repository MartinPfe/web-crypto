import { useState } from 'react';
import './App.css';
import { signInWithGoogle } from './signIn';
import { getGoogleDriveFiles } from './getDriveFiles';
import { User } from 'firebase/auth';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [files, setFiles] = useState<any[]>([]);

  const handleLoginWithGoogle = async () => {
    const googleUser = await signInWithGoogle();
    if (googleUser) {
      setUser(googleUser);
      const token = await googleUser.getIdToken();
      const driveFiles = await getGoogleDriveFiles(token);
      setFiles(driveFiles || []);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <div>
            <img src={user.photoURL || ''} alt={user.displayName || 'User'} />
            <h2>Bienvenido, {user.displayName}</h2>
            <p>Email: {user.email}</p>
            {/* <h3>Archivos de drive:</h3>
            <ul>
              {files.map(file => (
                <li key={file.id}>{file.name}</li>
              ))}
            </ul> */}
          </div>
        ) : (
          <button type="button" onClick={handleLoginWithGoogle}>Iniciar sesión con Google</button>
        )}
      </header>
    </div>
  );
}

export default App;
