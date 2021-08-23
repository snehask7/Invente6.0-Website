import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '../lib/hooks';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
