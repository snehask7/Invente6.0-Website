import React from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div
        className={styles.mockup + ' ' + styles.loaded + ' ' + styles.opened}
      >
        <div className={styles.part + ' ' + styles.top}>
          <img
            src="/hero/macbook-top.svg"
            alt=""
            className={styles.top + ' ' + styles.mockupImg}
          />
          <img
            src="/hero/macbook-cover.svg"
            alt=""
            className={styles.cover + ' ' + styles.mockupImg}
          />

          <video autoPlay>
            <source
              src="https://d1xm195wioio0k.cloudfront.net/images/video/support.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.part + ' ' + styles.bottom}>
          <img
            src="/hero/macbook-cover.svg"
            alt=""
            className={styles.cover + ' ' + styles.mockupImg}
          />
          <img
            src="/hero/macbook-bottom.svg"
            alt=""
            className={styles.bottom + ' ' + styles.mockupImg}
          />
        </div>
      </div>
    </div>
  );
}
