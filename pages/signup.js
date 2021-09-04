import axios from 'axios';
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
import styles from '../styles/Signup.module.css';

function generate4DigitNumber() {
  return Math.floor(Math.random() * 10000) + 1;
}

function SignUp() {
  const [step, setStep] = useState(-1);
  const [buttonText, setButtonText] = useState('Continue');
  const [state, setState] = useState({
    email: '',
    password: '',
    username: '',
    phone_number: '',
    full_name: '',
    college_name: '',
    reg_no: '',
    department: '',
    year: '',
  });
  const { signup, currentUser, addUserDetails } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { navbarToggle, toggleNavbar } = useNav();

  const onContinue = () => {
    setStep(step + 1);
    if (step >= 2) setButtonText('Sign Up');
  };

  useEffect(() => {
    if (currentUser) router.push('/unverified');
  }, [currentUser, router]);

  function onChange(label, event) {
    //perform validation
    var values = state;
    values[label] = event.target.value;
    setState(values);
    console.log(values);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(state);
    try {
      setLoading(true);
      const { user: currentUser } = await signup(
        state['email'],
        state['password']
      );
      if (currentUser) {
        const username =
          state['full_name'].toLowerCase().replace(' ', '_') +
          generate4DigitNumber();
        const dicebearURL = `https://avatars.dicebear.com/api/bottts/${username}.svg`;
        await currentUser.sendEmailVerification();
        toast.success('Verification email sent');
        await addUserDetails(currentUser, state['full_name'], dicebearURL);
        axios({
          baseURL: window.location.origin,
          method: 'POST',
          url: '/api/user',
          data: {
            uid: currentUser.uid,
            email: state['email'],
            username: username,
            fullName: state['full_name'],
            phone: state['phone_number'],
            registerNumber: state['reg_no'],
            year: state['year'],
            department: state['department'],
            collegeName: state['college_name'],
          },
        })
          .then(() => {
            console.log('SignUp success');
            toast.success('Sign up successful!');
          })
          .catch(() => {
            toast.error('Unable to post data');
          });
        router.push('/unverified');
      } else {
        toast.error('Error signing up');
      }
      //console.log('SignUp success');
      setLoading(false);
    } catch (err) {
      //console.log('Failed to login', err);
      toast.error('An unexpected error has occurred. ☠️');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles2.animation_wrapper}>
        <div
          className={styles2['particle'] + ' ' + styles2['particle_4']}
        ></div>
      </div>
      <NavbarComp />
      <main className={styles2.page_wrapper}>
        <div className={!navbarToggle ? styles.signupCard : styles.hide}>
          <h1 className={styles.typing}>
            <Typist
              avgTypingDelay={30}
              cursor={{ hideWhenDone: true }}
              onTypingDone={() => onContinue()}
            >
              Welcome to SSN Invente 6.0!
            </Typist>
          </h1>
          {step >= 0 ? (
            <h1 className={styles.typing}>
              <Typist
                avgTypingDelay={20}
                cursor={{ hideWhenDone: true }}
                onTypingDone={() => onContinue()}
              >
                Are you ready for a battle of minds?
              </Typist>
            </h1>
          ) : null}

          <form onSubmit={onSubmit}>
            {step >= 1 ? (
              <Container>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <h5 className={styles.inputLabel}>Full Name</h5>
                    <div className={styles.terminalInput}>
                      <p>{'>'}</p>
                      <input
                        onChange={(e) => onChange('full_name', e)}
                        className={styles.inputField}
                        type="text"
                        required
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            ) : null}
            {step >= 2 ? (
              <Container>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <h5 className={styles.inputLabel}>College Name</h5>
                    <div className={styles.terminalInput}>
                      <p>{'>'}</p>
                      <input
                        onChange={(e) => onChange('college_name', e)}
                        className={styles.inputField}
                        type="text"
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <h5 className={styles.inputLabel}>
                      College Register Number
                    </h5>
                    <div className={styles.terminalInput}>
                      <p>{'>'}</p>
                      <input
                        onChange={(e) => onChange('reg_no', e)}
                        className={styles.inputField}
                        type="text"
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <h5 className={styles.inputLabel}>Year</h5>
                    <select
                      className={styles.inputField}
                      required
                      onChange={(e) => onChange('year', e)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </Col>
                  <Col xs={12} md={6}>
                    <h5 className={styles.inputLabel}>Department</h5>
                    <input
                      className={styles.inputField}
                      type="text"
                      list="departments"
                      onChange={(e) => onChange('department', e)}
                    />
                    <datalist
                      id="departments"
                      className={styles.inputField}
                      required
                    >
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="BME">BME</option>
                      <option value="Civil">Civil</option>
                      <option value="Chemical">Chemical</option>
                    </datalist>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <h5 className={styles.inputLabel}>College Email</h5>
                    <div className={styles.terminalInput}>
                      <p>{'>'}</p>
                      <input
                        className={styles.inputField}
                        onChange={(e) => onChange('email', e)}
                        type="email"
                        required
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <h5 className={styles.inputLabel}>Phone Number</h5>
                    <div className={styles.terminalInput}>
                      <p>{'>'}</p>
                      <input
                        className={styles.inputField}
                        onChange={(e) => onChange('phone_number', e)}
                        type="phone"
                        required
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            ) : null}
            {step >= 3 ? (
              <Container>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <h5 className={styles.inputLabel}>Password</h5>
                    <div className={styles.terminalInput}>
                      <p>{'>'}</p>
                      <input
                        className={styles.inputField}
                        onChange={(e) => onChange('password', e)}
                        type="password"
                        required
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            ) : null}

            {step > 0 ? (
              <div className={styles.buttonContainer}>
                <Container>
                  <Row>
                    <Col xs={12} md={8}>
                      <h6 className={styles.signIn}>
                        Already have an account?
                        <span style={{ color: 'rgba(0, 225, 255, 0.87)' }}>
                          {' '}
                          <Link href="/signin">Sign In</Link>
                        </span>
                      </h6>
                    </Col>
                    <Col xs={12} md={4}>
                      <button
                        type="submit"
                        className={styles.continueButton}
                        onClick={() => onContinue()}
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

export default SignUp;
