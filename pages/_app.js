import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../lib/hooks';
import { NavProvider } from '../lib/navbarstate';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <NavProvider>
        <Component {...pageProps} />
        <Toaster
          toastOptions={{
            style: {
              background: '#080E22',
              color: '#FFFFFF',
            },
          }}
        />
      </NavProvider>
    </AuthProvider>
  );
}

export default MyApp;
