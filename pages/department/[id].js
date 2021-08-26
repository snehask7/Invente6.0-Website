import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaRegBuilding,
  FaRegClock,
  FaTrophy,
  FaUserAlt,
} from 'react-icons/fa';
import styles from '../../styles/DepartmentPage.module.css';
import data from '../../data.json';

export default function Department({ data }) {
  const [event, setEvent] = useState(0);
  const router = useRouter();
  var department = router.query.id;
  var events = data;
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.pageHeading}>
          Department of{' '}
          {department == 'Chemical' ? 'Chemical Engineering' : department}
        </h1>
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
              <h1 className={styles.eventHeading}>{events[event].name}</h1>
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
              {events[event].description.round_description.map((round, id) => {
                return (
                  <Row key={`round${id}`}>
                    <div className={styles.roundCard}>
                      {round.name}{' '}
                      {round.duration ? (
                        <>
                          &nbsp;<FaRegClock></FaRegClock>&nbsp;
                          {round.duration}
                        </>
                      ) : null}
                      <hr></hr>
                      {round.description}
                      <br></br>
                    </div>
                  </Row>
                );
              })}
              <div className={styles.row}>
                <div className={styles.col}>
                  {events[event].organisers.map((organiser, id) => {
                    return (
                      <div key={`organiser${id}`}>
                        {id == 0 ? (
                          <>
                            <FaPhoneAlt></FaPhoneAlt>
                          </>
                        ) : (
                          <>&nbsp;&nbsp;</>
                        )}
                        &nbsp;{organiser.name + ':' + organiser.phone}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.col}>
                  {' '}
                  <FaUserAlt></FaUserAlt>&nbsp;
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
                  <FaCalendarAlt></FaCalendarAlt>&nbsp;Oct 7, 9:00 AM
                </div>
                <div className={styles.col}>
                  {' '}
                  <FaRegBuilding></FaRegBuilding>&nbsp;Open to{' '}
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
                          </>
                        ) : (
                          <>&nbsp;&nbsp;</>
                        )}
                        &nbsp;{prize}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <Row className={styles.iconContainer}>
                  <Col className={styles.iconStyling} sm={12} md={12} lg={2}>
                    {events[event].organisers.map((organiser, id) => {
                      return (
                        <div key={`organiser${id}`}>
                          {id == 0 ? (
                            <>
                              <FaPhoneAlt></FaPhoneAlt>
                            </>
                          ) : (
                            <>&nbsp;&nbsp;</>
                          )}
                          &nbsp;{organiser.name + ' - ' + organiser.phone}
                        </div>
                      );
                    })}
                  </Col>
  
                  <Col className={styles.iconStyling} sm={12} md={12} lg={2}>
                    <FaUserAlt></FaUserAlt>&nbsp;
                    {events[event].min_team_size == events[event].max_team_size
                      ? events[event].min_team_size + ' '
                      : events[event].min_team_size +
                      ' - ' +
                      events[event].max_team_size +
                      ' '}
                    per team
                  </Col>
                  <Col className={styles.iconStyling} sm={12} md={12} lg={2}>
                    <FaCalendarAlt></FaCalendarAlt>&nbsp;Oct 7, 9:00 AM
                  </Col>
                  <Col className={styles.iconStyling} sm={12} md={12} lg={2}>
                    <FaRegBuilding></FaRegBuilding>&nbsp;Open to{' '}
                    {events[event].open_to == 'All'
                      ? 'any Department'
                      : events[event].open_to.join()}
                  </Col>
                  <Col className={styles.iconStyling} sm={12} md={12} lg={2}>
                    {events[event].prizes.map((prize, id) => {
                      return (
                        <div key={`organiser${id}`}>
                          {id == 0 ? (
                            <>
                              <FaTrophy></FaTrophy>
                            </>
                          ) : (
                            <>&nbsp;&nbsp;</>
                          )}
                          &nbsp;{prize}
                        </div>
                      );
                    })}
                  </Col>
                </Row> */}
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: 'ECE' } }],
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
