import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import {
  verifyPasswordResetCode,
  applyActionCode,
  confirmPasswordReset,
} from '../lib/firebase';
import { Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import NavbarComp from '../components/Navbar';
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
          const email = await verifyPasswordResetCode(oobCode);
          setEmail(email);
        } else {
          const email = await applyActionCode(oobCode);
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
    confirmPasswordReset(oobCode, password)
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
      <div className={styles2.animation_wrapper}>
        <div
          className={styles2['particle'] + ' ' + styles2['particle_3']}
        ></div>
        <div
          className={styles2['particle'] + ' ' + styles2['particle_4']}
        ></div>
      </div>
      <NavbarComp />
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
