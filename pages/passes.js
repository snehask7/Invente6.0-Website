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
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/purple.svg" alt="plan background" /></div>
                  <img src="https://wee.bio/assets/pattern/super-obj-1.png" alt="plan background" className={styles.obj_1} />
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
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/purple.svg" alt="plan background" /></div>
                  <img src="https://wee.bio/assets/pattern/super-obj-1.png" alt="plan background" className={styles.obj_1} />
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Combo</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>250</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>All Tech + All Non-Tech + Devathlon (Hackathon)</span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/purple.svg" alt="plan background" /></div>
                  <img src="https://wee.bio/assets/pattern/super-obj-1.png" alt="plan background" className={styles.obj_1} />
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Combo</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>200</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>All Tech + All Non-Tech<br />&nbsp;</span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/green.svg" alt="plan background" /></div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Hackathon</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>100</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>Devathlon<br />&nbsp; </span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/green.svg" alt="plan background" /></div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Hackathon</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>200</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>Hackinfinity<br />&nbsp;</span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
                  </div>
                </Col><Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/green.svg" alt="plan background" /></div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Hackathon</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>100</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>Biomedicathon<br />&nbsp;</span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/blue.svg" alt="plan background" /></div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Workshop</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>150</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>AI/ML Workshop<br />&nbsp; < /span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/blue.svg" alt="plan background" /></div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Workshop</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>100</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>Civil Workshop<br />&nbsp;</span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/pink.svg" alt="plan background" /></div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Events</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>150</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>All Tech Events<br />&nbsp;</span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
                  </div>
                </Col>
                <Col className={styles.pricing_plan}>
                  <div className={styles.plan_bg}><Image width="400" height="600" src="/Plans/pink.svg" alt="plan background" /></div>
                  <div className={styles.super_tier}>
                    <div className={styles.plan_title}>Events</div>
                    <div className={styles.plan_price}>
                      <div className={styles.dollar}>Rs.</div>
                      <div className={styles.price}>100</div>
                    </div>
                    <div className={styles.plan_description}>
                      <span>All Non-Tech Events<br />&nbsp;</span>
                    </div>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Pay Now </a>
                  </div>
                  <div className={styles.plan_action}>
                    <a >Upload Receipt</a>
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
