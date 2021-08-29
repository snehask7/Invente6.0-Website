import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '../lib/hooks';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          style: {
            background: '#080E22',
            color: '#FFFFFF',
          },
        }}
      />
    </AuthProvider>
  );
}

export default MyApp;
