import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
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
      <Head>
        <title>Passes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarComp />
      <main>
        <div
          className={
            !navbarToggle ? styles.mainContainer : styles.hideMainContainer
          }
        >
          <h1 className={!navbarToggle ? styles.pageHeading : styles.hide}>
            Event Passes
          </h1>
          <section
            className={!navbarToggle ? styles.price_section : styles.hide}
            id="pricing"
          >
            <div className={styles.instructionsCard}>
              <span className={styles.ins}>
                <ol>
                  <li>
                    Click on Pay Now and choose the type of pass you wish to
                    obtain and pay via paytm
                  </li>
                  <li>
                    After you pay, download the receipt from paytm and upload it
                    by clicking on upload receipt below
                  </li>
                  <li>
                    The payment will be approved in 1-2 days and you will
                    receive an email notification, the payment status will also
                    be updated in your profile!
                  </li>
                </ol>
              </span>
            </div>
            <div className={styles.buttons}>
              <div className={styles.plan_action}>
                <a
                  target="_blank"
                  href="https://m.paytm.me/ssninv_nrweb"
                  rel="noreferrer"
                >
                  Pay Now{' '}
                </a>
              </div>

              <div className={styles.plan_action}>
                <a
                  target="_blank"
                  href="https://7ey3j0toxd0.typeform.com/Invente-Receipt"
                  rel="noreferrer"
                >
                  Upload Receipt{' '}
                </a>
              </div>
            </div>

            <div className={styles.feature}>
              <Row className={styles.pricing_plans}>
                <Col className={styles.pricing_plan}>
                  <div className={styles.combo_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/purple.svg"
                      alt="plan background"
                    />
                  </div>
                  {/* eslint-disable-next-line */}
                  <img
                    src="https://wee.bio/assets/pattern/super-obj-1.png"
                    alt="plan background"
                    className={styles.obj_1}
                  />
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Combo</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>300</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>All Tech + All Non-Tech + AI/ML Workshop)</span>
                    </div>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.combo_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/purple.svg"
                      alt="plan background"
                    />
                  </div>
                  {/* eslint-disable-next-line */}
                  <img
                    src="https://wee.bio/assets/pattern/super-obj-1.png"
                    alt="plan background"
                    className={styles.obj_1}
                  />
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Combo</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>250</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>All Tech + All Non-Tech + Devathlon</span>
                    </div>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.combo_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/purple.svg"
                      alt="plan background"
                    />
                  </div>
                  {/* eslint-disable-next-line */}
                  <img
                    src="https://wee.bio/assets/pattern/super-obj-1.png"
                    alt="plan background"
                    className={styles.obj_1}
                  />
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Combo</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>200</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>
                        All Tech + All Non-Tech
                        <br />
                        &nbsp;
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/green.svg"
                      alt="plan background"
                    />
                  </div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Hackathon</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>100</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>
                        Devathlon
                        <br />
                        &nbsp;{' '}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/green.svg"
                      alt="plan background"
                    />
                  </div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Hackathon</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>150</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>
                        Hackinfinity
                        <br />
                        &nbsp;
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/green.svg"
                      alt="plan background"
                    />
                  </div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Hackathon</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>100</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>
                        Biomedicathon
                        <br />
                        &nbsp;
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/blue.svg"
                      alt="plan background"
                    />
                  </div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Workshop</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>150</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>
                        AI/ML Workshop
                        <br />
                        &nbsp;{' '}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/blue.svg"
                      alt="plan background"
                    />
                  </div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Workshop</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>100</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>
                        Civil Workshop
                        <br />
                        &nbsp;
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/pink.svg"
                      alt="plan background"
                    />
                  </div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Events</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>150</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>
                        All Tech Events
                        <br />
                        &nbsp;
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}>
                    <Image
                      width="400"
                      height="600"
                      src="/Plans/pink.svg"
                      alt="plan background"
                    />
                  </div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Events</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>100</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>
                        All Non-Tech Events
                        <br />
                        &nbsp;
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Plans;
