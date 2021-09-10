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

function Forgot() {
  const [formEmail, setFormEmail] = useState('');
  const [sentMail, setSentMail] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser, resetPassword } = useAuth();
  const router = useRouter();
  const { navbarToggle, toggleNavbar } = useNav();

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
    setLoading(true);
    try {
      await toast.promise(resetPassword(formEmail), {
        loading: 'Sending you an email..',
        success: 'Check your mail for instructions',
        error: 'Check validity of the email address entered',
      });
      setLoading(false);
      setSentMail(true);
      router.push('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <NavbarComp />
      <main className={navbarToggle ? styles.hide : styles2.page_wrapper}>
        <div className={styles.signinCard}>
          <h1 className={styles.typing}>
            <Typist
              avgTypingDelay={30}
              cursor={{ hideWhenDone: true }}
              onTypingDone={() => onContinue()}
            >
              Don&apos;t worry, we got your back!
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
                      <button type="submit" className={styles.continueButton}>
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
