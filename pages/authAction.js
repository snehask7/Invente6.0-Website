import firebase from 'firebase/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Row } from 'react-bootstrap';
import NavbarComp from '../components/Navbar';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Signin.module.css';
function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const { query } = useRouter();
  var mode = query.mode;
  var actionCode = query.oobCode;
  firebase
    .auth()
    .verifyPasswordResetCode(actionCode)
    .then(function (email) {
      setEmail(email);
    })
    .catch(function () {
      // Invalid code
      alert('Invalid page! Please use the link in your email');
    });
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
            <h1 className={styles.mailBoxText}>
              <h4>Your email has been verified</h4>
              <br />
              You can now sign in with your new account!{' '}
              <span style={{ color: 'rgba(0, 225, 255, 0.87)' }}>
                {' '}
                <Link href="/signin">Sign In</Link>
              </span>
            </h1>
          ) : (
            null(
              page == 'resetPassword' ? (
                <>
                  <h1 className={styles.mailBoxText}>
                    <h4>Reset your password</h4>
                    <br />
                    for {email}
                    <br />
                    <Row>
                      <input
                        type="password"
                        id="form-password"
                        onChange={(e) => setFormPassword(e.target.value)}
                        value={formPassword}
                        className={styles.inputField}
                        required
                      />
                      <button
                        type="submit"
                        className={styles.continueButton}
                        onClick={() => onContinue()}
                      >
                        {buttonText}
                      </button>
                    </Row>
                  </h1>
                </>
              ) : null
            )
          )}
        </div>
      </main>
    </div>
  );
}
export default Signin;
