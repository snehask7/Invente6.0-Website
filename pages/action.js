import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { auth } from '../lib/firebase';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Signin.module.css';

function AuthAction() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { query } = useRouter();
  let mode = query.mode;
  let oobCode = query.oobCode;

  useEffect(() => {
    async function fetchData() {
      try {
        if (mode === 'resetPassword') {
          const email = await auth.verifyPasswordResetCode(oobCode);
          setEmail(email);
        } else {
          const email = await auth.applyActionCode(oobCode);
          setEmail(email);
        }
      } catch (error) {
        console.log('Not initialized', error);
      }
    }
    fetchData();
  }, [oobCode, mode]);

  function changePassword(e) {
    e.preventDefault();
    auth
      .confirmPasswordReset(oobCode, password)
      .then((resp) => {
        toast.success('Password Updated');
        router.push('/signin');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Invente 6.0</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <NavbarComp /> */}
      <main className={styles2.page_wrapper}>
        <div className={styles.signinCard}>
          {mode == 'verifyEmail' ? (
            <>
              <h4 className={styles.mailBoxText}>
                Your email has been verified
              </h4>
              <br />
              <h1 className={styles.mailBoxText}>
                You can now sign in with your new account!{' '}
                <span style={{ color: 'rgba(0, 225, 255, 0.87)' }}>
                  {' '}
                  <Link href="/signin">Sign In</Link>
                </span>
              </h1>
            </>
          ) : mode == 'resetPassword' ? (
            <>
              <div className={styles.mailBoxText}>
                <h4>
                  Reset your password
                  <br />
                  for {email}
                </h4>
              </div>
              <br />
              <Row>
                <form onSubmit={changePassword}>
                  <h5 className={styles.inputLabel}>New Password</h5>
                  <div className={styles.terminalInput}>
                    <p>{'>'}</p>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className={styles.inputField}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.continueButton}>
                    Save
                  </button>
                </form>
              </Row>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}
export default AuthAction;
