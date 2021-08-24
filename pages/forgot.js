import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typist from 'react-typist';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Signin.module.css';

function Forgot() {
  const { currentUser } = useAuth();
  const [formEmail, setFormEmail] = useState('');
  const [loading, setLoading] = useState(false);
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
    console.log(formEmail);
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
        <div className={styles.signinCard}>
          <h1 className={styles.typing}>
            <Typist
              avgTypingDelay={30}
              cursor={{ hideWhenDone: true }}
              onTypingDone={() => onContinue()}
            >
              Don't worry, we got your back!
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
                </React.Fragment>
              ) : null}
            </Container>

            {step >= 0 ? (
              <div className={styles.buttonContainer}>
                <Container>
                  <Row>

                    <Col xs={12}>
                      <button
                        type="submit"
                        className={styles.continueButton}
                      >
                        Recover
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
export default Forgot;
