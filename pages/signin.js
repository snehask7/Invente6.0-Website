import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import Typist from 'react-typist';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import { useNav } from '../lib/navbarstate';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Signin.module.css';

function Signin() {
  const { currentUser } = useAuth();
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { navbarToggle, toggleNavbar } = useNav();
  const { login } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState(-1);

  const onContinue = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    if (currentUser) router.push('/');
  }, [currentUser, router]);

  const onSubmit = async (event) => {
    event.preventDefault();
    //console.log(formEmail, formPassword);
    let toastId;
    try {
      setLoading(true);
      toastId = toast.loading('Signing in..');
      await login(formEmail, formPassword);
      toast.dismiss(toastId);
      toast.success('Success!');
      //console.log('SignIn success');
      router.push('/');
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        toast.error('Email not found! Did you mean to sign up?');
      } else if (err.code === 'auth/wrong-password') {
        toast(
          'The password entered was incorrect or you have not verified your email yet.',
          {
            duration: 7000,
            icon: '❌',
          }
        );
      } else {
        toast.error('An unexpected error has occurred. ☠️');
      }
      toast.dismiss(toastId);
      console.log('Failed to login', err);
    }
  };

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
        <div className={!navbarToggle ? styles.signinCard : styles.hide}>
          <h1 className={styles.typing}>
            <Typist
              avgTypingDelay={30}
              cursor={{ hideWhenDone: true }}
              onTypingDone={() => onContinue()}
            >
              Welcome back!
            </Typist>
          </h1>
          <form onSubmit={onSubmit}>
            <Container>
              {step >= 0 ? (
                <React.Fragment>
                  <Row>
                    <Col xs={12}>
                      <h5 className={styles.inputLabel}>Email</h5>
                      <div className={styles.terminalInput}>
                        <p>{'>'}</p>
                        <input
                          type="email"
                          id="form-email"
                          onChange={(e) => setFormEmail(e.target.value)}
                          value={formEmail}
                          className={styles.inputField}
                          required
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <h5 className={styles.inputLabel}>Password</h5>
                      <div className={styles.terminalInput}>
                        <p>{'>'}</p>
                        <input
                          type="password"
                          id="form-password"
                          onChange={(e) => setFormPassword(e.target.value)}
                          value={formPassword}
                          className={styles.inputField}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                </React.Fragment>
              ) : null}
            </Container>

            {step >= 0 ? (
              <div className={styles.buttonContainer}>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <h6 className={styles.signIn}>
                        <span style={{ color: 'rgba(0, 225, 255, 0.87)' }}>
                          {' '}
                          <Link href="/forgot">Forgot Password?</Link>
                        </span>
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8}>
                      <h6 className={styles.signIn}>
                        Don`t have an account?
                        <span style={{ color: 'rgba(0, 225, 255, 0.87)' }}>
                          {' '}
                          <Link href="/signup">Sign Up</Link>
                        </span>
                      </h6>
                    </Col>
                    <Col xs={12} md={4}>
                      <button type="submit" className={styles.continueButton}>
                        Sign In
                      </button>
                    </Col>
                  </Row>
                </Container>
              </div>
            ) : null}
          </form>
        </div>
      </main>
    </div>
  );
}
export default Signin;
