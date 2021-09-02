import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { logout } = useAuth();
  const router = useRouter();

  const { currentUser } = useAuth();
  const onSignOut = async (event) => {
    try {
      await logout();
      console.log('SignOut success');
      router.push('/');
    } catch (err) {
      console.log('Failed to logout', err);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Invente 6.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComp />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Invente 6.0</h1>
        <div className={styles.about}>
          <h1>About</h1>
          <p>
            Occaecat officia elit excepteur eiusmod magna excepteur minim sit et
            proident aliqua. Irure nisi aute duis velit ipsum in. Qui in aliqua
            dolor dolore laborum labore adipisicing laborum sit. Aliquip sunt
            quis fugiat eiusmod quis ex mollit Lorem Lorem esse laboris amet
            est. Ut ipsum magna esse dolor esse qui sunt non fugiat minim. Ea
            elit dolor quis aliquip est dolor mollit.
          </p>
        </div>
        <div className={styles.departments} id={'departments'}>
          <Link
            href={{
              pathname: '/department/ECE/0',
            }}
          >
            <a className={styles.card}>
              <h2>ECE</h2>
            </a>
          </Link>
          <Link
            href={{
              pathname: '/department/BME/0',
            }}
          >
            <a className={styles.card}>
              <h2>BME</h2>
            </a>
          </Link>
          <Link
            href={{
              pathname: '/department/EEE/0',
            }}
          >
            <a className={styles.card}>
              <h2>EEE</h2>
            </a>
          </Link>
          <Link
            href={{
              pathname: '/department/IT/0',
            }}
          >
            <a className={styles.card}>
              <h2>IT</h2>
            </a>
          </Link>
          <Link
            href={{
              pathname: '/department/Chemical/0',
            }}
          >
            <a className={styles.card}>
              <h2>Chemical</h2>
            </a>
          </Link>
          <Link
            href={{
              pathname: '/department/CSE/0',
            }}
          >
            <a className={styles.card}>
              <h2>CSE</h2>
            </a>
          </Link>
          <Link
            href={{
              pathname: '/department/Civil/0',
            }}
          >
            <a className={styles.card}>
              <h2>Civil</h2>
            </a>
          </Link>
          <Link
            href={{
              pathname: '/department/Mechanical/0',
            }}
          >
            <a className={styles.card}>
              <h2>Mechanical</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
