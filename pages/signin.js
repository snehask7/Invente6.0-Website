import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typist from 'react-typist';
import { useAuth } from '../lib/hooks';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Signin.module.css';

function Signin() {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState(-1);
  const [buttonText, setButtonText] = useState('Continue');

  const onContinue = () => {
    setStep(step + 1);
    if (step >= 0) setButtonText('Sign In');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formEmail, formPassword);
    try {
      setLoading(true);
      await login(formEmail, formPassword);
      console.log('SignIn success');
      router.push('/');
    } catch (err) {
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
      <main className={styles2.page_wrapper}>
        <div className={styles.signinCard}>
          <h1 className={styles.typing}>
            <Typist
              avgTypingDelay={40}
              cursor={{ hideWhenDone: true }}
              onTypingDone={() => onContinue()}
            >
              Welcome back!
            </Typist>
          </h1>
          <form onSubmit={onSubmit}>
            <Container>
              {step >= 0 ? (
                <Row>
                  <Col xs={12} md={6}>
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
              ) : null}
              {step >= 1 ? (
                <Row>
                  <Col xs={12} md={6}>
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
              ) : null}
            </Container>

            {step >= 0 ? (
              <div className={styles.buttonContainer}>
                <Container>
                  <Row>
                    <Col xs={12} md={6}>
                      <h6 className={styles.signIn}>
                        Don`t have an account?
                        <span style={{ color: 'rgba(0, 225, 255, 0.87)' }}>
                          {' '}
                          <Link href="/signup">Sign Up</Link>
                        </span>
                      </h6>
                    </Col>
                    <Col xs={12} md={6}>
                      <button
                        type="submit"
                        className={styles.continueButton}
                        onClick={() => {
                          if (step == 0 && formEmail.length > 0) {
                            onContinue();
                          }
                        }}
                      >
                        {buttonText}
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
