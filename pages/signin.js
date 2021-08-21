import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Signin.module.css';
import { useAuth } from '../lib/hooks';

function Signin() {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

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
          className={styles2['particle'] + ' ' + styles2['particle_1']}
        ></div>
        <div
          className={styles2['particle'] + ' ' + styles2['particle_2']}
        ></div>
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
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString('Welcome back!')
                  .start()
                  .callFunction(() => {
                    typewriter.stop().pauseFor(200);
                  });
              }}
            />
          </h1>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="email"
              id="form-email"
              placeholder="Email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              className={styles.input}
            />

            <input
              type="password"
              id="form-password"
              placeholder="Password"
              value={formPassword}
              onChange={(e) => setFormPassword(e.target.value)}
              className={styles.input}
            />
            <Link href="">
              <a className={styles.text_muted}> Forgot password?</a>
            </Link>
            <button
              type="submit"
              className={styles.btn_signin}
              disabled={loading}
            >
              Sign In
            </button>
          </form>
          <h6 className={styles.signUp}>
            Don`t have an account?
            <span style={{ color: '#0ff' }}>
              {' '}
              <Link href="/signup">Sign Up</Link>
            </span>
          </h6>
        </div>
      </main>
    </div>
  );
}

export default Signin;
