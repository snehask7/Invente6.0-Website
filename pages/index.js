import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../lib/hooks';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { logout } = useAuth();

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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the official SSN Invente 6.0 Website
        </h1>

        <div className={styles.grid}>
          <Link href="/signin">
            <a className={styles.card}>
              <h2>Signin</h2>
            </a>
          </Link>

          <Link href="/signup">
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Signup</h2>
            </a>
          </Link>
        </div>
        {currentUser ? (
          <>
            <h3>Successfully Logged In as {currentUser.uid}</h3>
            <button onClick={() => onSignOut()} className={styles.card}>
              <h2>Signout</h2>
            </button>
            <Link
              href={{
                pathname: '/department/ECE',
              }}
            >
              <a className={styles.card}>
                <h2>ECE</h2>
              </a>
            </Link>
          </>
        ) : null}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
