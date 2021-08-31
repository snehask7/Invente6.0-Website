import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaRegBuilding,
  FaRegClock,
  FaTrophy,
  FaUserAlt,
} from 'react-icons/fa';
import 'react-responsive-modal/styles.css';
import NavbarComp from '../../components/Navbar';
import data from '../../data.json';
import styles from '../../styles/DepartmentPage.module.css';

export default function Department({ data }) {
  const [event, setEvent] = useState(0);
  const router = useRouter();
  var department = router.query.id;
  var events = data;
  function register(id) {
    toast.success('Registered Successfully');
    //add registration code
    // alert(events[id].name);
    // if (
    //   events[id].min_team_size == events[id].max_team_size && events[id].min_team_size == 1
    // ) {
    //   //only 1 per team
    //   toast.success('Registered Successfully');
    // } else {
    //   onOpenModal();
    // }
  }
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className={styles.container}>
      <NavbarComp />
      <main>
        <div className={styles.mainContainer}>
          <h1 className={styles.pageHeading}>
            Department of{' '}
            {department == 'Chemical' ? 'Chemical Engineering' : department}
          </h1>
          {/* <div>
          <Modal
            classNames={{
              modal: styles.teamModal,
            }}
            open={open}
            onClose={onCloseModal}
            center
          >
            <div>
              <h5>
                You can choose your teammates now or choose them later in the
                profile section. Ensure that your teammates have already signed
                up!
              </h5>
            </div>
          </Modal>
        </div> */}
          <Row className={styles.wrapper}>
            <Col
              lg={12}
              xl={12}
              md={12}
              sm={12}
              className={styles.eventsContainer}
            >
              <Row>
                {events.map((event, id) => {
                  return (
                    <Col
                      key={`event${id}`}
                      onClick={() => {
                        setEvent(id);
                      }}
                    >
                      <div className={styles.eventCard}>
                        <span></span>
                        <div className={styles.content}>
                          <div className={styles.content}>
                            <p>{event.name}</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col lg={12} xl={12} md={12} sm={12}>
              <div className={styles.eventDetails}>
                <p className={styles.headerWrapper}>
                  <span className={styles.eventHeading}>
                    {events[event].name}
                  </span>
                  <span
                    className={
                      events[event].category == 'tech'
                        ? styles.techbadge
                        : styles.nontechbadge
                    }
                  >
                    {events[event].category == 'tech' ? 'Tech' : 'Non-Tech'}
                  </span>
                </p>
                <br></br>
                {events[event].description.summary ? (
                  <>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: events[event].description.summary,
                      }}
                      className={styles.eventDesc}
                    ></p>
                  </>
                ) : null}
                {events[event].description.rounds == 0 ? <hr></hr> : null}
                {events[event].description.round_description.map(
                  (round, id) => {
                    return (
                      <Row key={`round${id}`}>
                        <div className={styles.roundCard}>
                          <b> {round.name}</b>{' '}
                          {round.duration ? (
                            <>
                              &nbsp;<FaRegClock></FaRegClock>&nbsp;
                              {round.duration}
                            </>
                          ) : null}
                          <hr></hr>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: round.description,
                            }}
                          ></p>
                        </div>
                      </Row>
                    );
                  }
                )}
                <div className={styles.row}>
                  <div className={styles.col}>
                    {events[event].organisers.map((organiser, id) => {
                      return (
                        <div key={`organiser${id}`}>
                          {id == 0 ? (
                            <>
                              <FaPhoneAlt></FaPhoneAlt>
                              <br></br>
                            </>
                          ) : null}
                          {organiser.name + ' : ' + organiser.phone}
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles.col}>
                    {' '}
                    <FaUserAlt></FaUserAlt>
                    <br></br>
                    {events[event].min_team_size == events[event].max_team_size
                      ? events[event].min_team_size + ' '
                      : events[event].min_team_size +
                        ' - ' +
                        events[event].max_team_size +
                        ' '}
                    per team
                  </div>
                  <div className={styles.col}>
                    {' '}
                    <FaCalendarAlt></FaCalendarAlt>
                    <br></br>Oct 7, 9:00 AM
                  </div>
                  <div className={styles.col}>
                    {' '}
                    <FaRegBuilding></FaRegBuilding>
                    <br></br>Open to{' '}
                    {events[event].open_to == 'All'
                      ? 'any Department'
                      : events[event].open_to.join()}
                  </div>
                  <div className={styles.col}>
                    {' '}
                    {events[event].prizes.map((prize, id) => {
                      return (
                        <div key={`organiser${id}`}>
                          {id == 0 ? (
                            <>
                              <FaTrophy></FaTrophy>
                              <br></br>
                            </>
                          ) : null}
                          {prize}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.buttonWrapper}>
                  <button
                    className={styles.registerButton}
                    onClick={() => register(event)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'ECE' } },
      { params: { id: 'BME' } },
      { params: { id: 'EEE' } },
      { params: { id: 'IT' } },
      { params: { id: 'CSE' } },
      { params: { id: 'Chemical' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = data[id];
  return {
    props: {
      data: res,
    },
  };
}
