import { useRouter } from 'next/router';
import Link from 'next/link';
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
import NavbarComp from '../../../components/Navbar';
import data from '../../../data.json';
import styles from '../../../styles/DepartmentPage.module.css';

export default function Department({ data }) {
  const router = useRouter();
  var department = router.query.dept;
  var id = parseInt(router.query.id);
  var events = data;

  function register(id) {
    toast.success('Registered Successfully');
    //add registration code
    // alert(events[id].name);
    // if (
    //   events[id].min_team_size == events[id].max_team_size && events[id].min_team_size == 1
    // ) {
    //only 1 per team
    //   toast.success('Registered Successfully');
    // } else {
    //   onOpenModal();
    // }
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <NavbarComp />
        <main>
          <div className={styles.mainContainer}>
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
                      <Link
                        key={`event${id}`}
                        href={`/department/${department}/${id}`}
                        passHref
                      >
                        <Col>
                          <div className={styles.eventCard}>
                            <span></span>
                            <div className={styles.content}>
                              <div className={styles.content}>
                                <p>{event.name}</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Link>
                    );
                  })}
                </Row>
              </Col>
              <Col lg={12} xl={12} md={12} sm={12}>
                <div className={styles.eventDetails}>
                  <p className={styles.headerWrapper}>
                    <span className={styles.eventHeading}>
                      {events[id].name}
                    </span>
                    <span
                      className={
                        events[id].category == 'tech'
                          ? styles.techbadge
                          : styles.nontechbadge
                      }
                    >
                      {events[id].category == 'tech' ? 'Tech' : 'Non-Tech'}
                    </span>
                  </p>
                  <br></br>
                  {events[id].description.summary ? (
                    <>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: events[id].description.summary,
                        }}
                        className={styles.eventDesc}
                      ></p>
                    </>
                  ) : null}
                  {events[id].description.rounds == 0 ? <hr></hr> : null}
                  {events[id].description.round_description.map((round, id) => {
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
                  })}
                  <div className={styles.row}>
                    <div className={styles.col}>
                      {events[id].organisers.map((organiser, id) => {
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
                      {events[id].min_team_size == events[id].max_team_size
                        ? events[id].min_team_size + ' '
                        : events[id].min_team_size +
                          ' - ' +
                          events[id].max_team_size +
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
                      {events[id].open_to == 'All'
                        ? 'any Department'
                        : events[id].open_to.join()}
                    </div>
                    <div className={styles.col}>
                      {' '}
                      {events[id].prizes.map((prize, id) => {
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
                      onClick={() => register(id)}
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
    </React.Fragment>
  );
}

export function getStaticPaths() {
  let paths = [];

  data['ECE'].map((event, i) =>
    paths.push({ params: { dept: 'ECE', id: i.toString() } })
  );
  data['BME'].map((event, i) =>
    paths.push({ params: { dept: 'BME', id: i.toString() } })
  );
  data['EEE'].map((event, i) =>
    paths.push({ params: { dept: 'EEE', id: i.toString() } })
  );
  data['IT'].map((event, i) =>
    paths.push({ params: { dept: 'IT', id: i.toString() } })
  );
  data['CSE'].map((event, i) =>
    paths.push({ params: { dept: 'CSE', id: i.toString() } })
  );
  data['Chemical'].map((event, i) =>
    paths.push({ params: { dept: 'Chemical', id: i.toString() } })
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { dept } = context.params;
  const res = data[dept];
  return {
    props: {
      data: res,
    },
  };
}
