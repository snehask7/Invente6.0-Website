import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import { useNav } from '../lib/navbarstate';
import styles from '../styles/Passes.module.css';

function Plans() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const { navbarToggle, toggleNavbar } = useNav();


  return (
    <div className={styles.container}>
      <NavbarComp />
      <main>
        <div
          className={
            !navbarToggle ? styles.mainContainer : styles.hideMainContainer
          }
        >
          <h1 className={styles.pageHeading}>
            Event Passes
          </h1>
          <section className={styles.price_section} id="pricing">
            <div className={styles.feature}>
              <Row className={styles.pricing_plans}>
                <Col className={styles.pricing_plan}>
                  <div className={styles.pricing_plan_extras}>
                    <ul>
                      <span>Includes:</span>
                      <li>Upto 1000 reviews /mo</li>
                      <li>Advanced Analytics</li>
                      <li>Patreon/Kofi/BuyMeACoffee Link</li>
                      <li>Unlimited Websites</li>
                      <li>Bio, Social Links</li>
                      <li>List multiple products</li>

                    </ul>
                  </div>
                </Col>
              </Row>
              <Row className={styles.pricing_plans}>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="350" height="500" src="/Plans/purple.svg" alt="plan background" /></div>
                  <img src="https://wee.bio/assets/pattern/super-obj-1.png" alt="plan background" className={styles.obj_1} />
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Super</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>$</div>
                      <div className={styles.price}>3</div>
                      <div className={styles.type}>/ month</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>For Power Makers</span>
                      <span> Growing their businesses and collecting a lot </span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a href="/register?plan=super" className={styles.btn + " " + styles.btn_big + " " + styles.btn_primary}>GET SUPER FOR $3</a>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="350" height="500" src="/Plans/green.svg" alt="plan background" /></div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Super</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>$</div>
                      <div className={styles.price}>3</div>
                      <div className={styles.type}>/ month</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>For Power Makers</span>
                      <span> Growing their businesses and collecting a lot of feedback, advanced insights into their users sentiments.</span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a href="/register?plan=super" className={styles.btn + " " + styles.btn_big + " " + styles.btn_primary}>GET SUPER FOR $3</a>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div >
      </main >
    </div >
  );
}
export default Plans;
