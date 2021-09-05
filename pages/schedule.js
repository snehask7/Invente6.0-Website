import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import NavbarComp from '../components/Navbar';
import { useNav } from '../lib/navbarstate';
import styles from '../styles/Schedule.module.css';

let current = 'CSE';
let day = 1;

const Empty = (props) => {
  if (!props.time) return <th className={styles.time}>{'      '}</th>;
  else return <th className={styles.half}>{'      '}</th>;
};

const Time = (props) => {
  if (props.time) {
    return <th className={styles.time}>{props.time}</th>;
  } else {
    return <th className={styles.half}>{props.time}</th>;
  }
};

const TimeM = (props) => {
  return <th className={styles.timeM}>{props.time}</th>;
};

const Department = (props) => {
  return (
    <th className={styles.dept} rowSpan={props.rows}>
      {props.name}{' '}
    </th>
  );
};

const Event = (props) => {
  return (
    <td colSpan={props.cols} className={styles.event}>
      {props.name}
    </td>
  );
};

const EventPurple = (props) => {
  return (
    <td colSpan={props.cols} className={styles['event']+' '+styles['purple']}>
      {props.name}
    </td>
  );
};

const EventPink = (props) => {
  return (
    <td colSpan={props.cols} className={styles['event']+' '+styles['pink']}>
      {props.name}
    </td>
  );
};

const EventBlue = (props) => {
  return (
    <td colSpan={props.cols} className={styles['event']+' '+styles['blue']}>
      {props.name}
    </td>
  );
};

const EventTeal = (props) => {
  return (
    <td colSpan={props.cols} className={styles['event']+' '+styles['teal']}>
      {props.name}
    </td>
  );
};

const EventMPurple = (props) => {
  return (
    <td rowSpan={props.rows} className={styles['eventM']+' '+styles['purple']}>
      {props.name}
    </td>
  );
};

const EventMPink = (props) => {
  return (
    <td rowSpan={props.rows} className={styles['eventM']+' '+styles['pink']}>
      {props.name}
    </td>
  );
};

const EventMBlue = (props) => {
  return (
    <td rowSpan={props.rows} className={styles['eventM']+' '+styles['blue']}>
      {props.name}
    </td>
  );
};

const EventMTeal = (props) => {
  return (
    <td rowSpan={props.rows} className={styles['eventM']+' '+styles['teal']}>
      {props.name}
    </td>
  );
};

function Card({ dept, handler }) {
  return (
    <div>
      {current == dept ? (
        <div className={styles.selectedCard}>
          <h2 className={styles.card_title}>{dept}</h2>
        </div>
      ) : null}
      {current != dept ? (
        <div
          className={styles.card}
          onClick={() => {
            current = dept;
            handler();
          }}
        >
          <h2 className={styles.card_title}>{dept}</h2>
        </div>
      ) : null}
    </div>
  );
}

function Schedule() {
  const [state, setState] = useState();
  const { navbarToggle, toggleNavbar, resetNavbar } = useNav();

  useEffect(() => {
    resetNavbar();
  }, [resetNavbar]);

  function changeDay(d) {
    day = d;
    if (state == 0) setState(1);
    else {
      setState(0);
    }
  }

  const handler = () => {
    if (state == 0) setState(1);
    else {
      setState(0);
    }
  };

  return (
    <div className={styles.container}>
      <NavbarComp />
      <main>
        <h1 className={navbarToggle ? styles.hide : styles.heading}>
          SCHEDULE
        </h1>
        {day == 1 ? (
          <div>
            <span className={navbarToggle ? styles.hide : styles.daySel}>
              Day 1<div className={styles.underline}></div>
            </span>
            <span
              className={navbarToggle ? styles.hide : styles.day}
              onClick={() => {
                changeDay(2);
              }}
            >
              Day 2
            </span>
            <div className={styles.eventsDesktop}>
              <Table>
                <thead>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Time time={'9 AM'} />
                    <Empty time={'half'} />
                    <Time time={'10 AM'} />
                    <Empty time={'half'} />
                    <Time time={'11 AM'} />
                    <Empty time={'half'} />
                    <Time time={'12 PM'} />
                    <Empty time={'half'} />
                    <Time time={'1 PM'} />
                    <Empty time={'half'} />
                    <Time time={'2 PM'} />
                    <Empty time={'half'} />
                    <Time time={'3 PM'} />
                    <Empty time={'half'} />
                    <Time time={'4 PM'} />
                  </tr>
                </thead>

                <tbody>
                  <tr className={styles.title}>
                    <Department name={'CSE'} rows={4} />
                    <EventPurple name={'Web-it-out'} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Fun Oasis'} cols={6}/>
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventTeal name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Mock Job Drive'} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'IT'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'ECE'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'EEE'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'CIVIL'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'BME'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'MECH'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'CHEM'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className={styles.eventsMobile}>
              <Container className={styles.cards}>
                <Row>
                  <Col xs={3}>
                    <Card dept={'CSE'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'IT'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'ECE'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'EEE'} handler={handler} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <Card dept={'CIVIL'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'BME'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'MECH'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'CHEM'} handler={handler} />
                  </Col>
                </Row>
              </Container>
              {current == 'CSE' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventMPurple name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventMPink name={'Hacker`s Asylum'} rows={8} />
                      <EventMBlue name={'Mock Job Drive'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMTeal name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'IT' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventMPurple name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventMPink name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMBlue name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'ECE' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'EEE' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'CIVIL' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'BME' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'MECH' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'CHEM' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
            </div>
          </div>
        ) : null}
        {day == 2 ? (
          <div>
            <span
              className={navbarToggle ? styles.hide : styles.day}
              onClick={() => {
                changeDay(1);
              }}
            >
              Day 1
            </span>

            <span className={navbarToggle ? styles.hide : styles.daySel}>
              Day 2<div className={styles.underline}></div>
            </span>
            <div className={styles.eventsDesktop}>
              <Table>
                <thead>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Time time={'9 AM'} />
                    <Empty time={'half'} />
                    <Time time={'10 AM'} />
                    <Empty time={'half'} />
                    <Time time={'11 AM'} />
                    <Empty time={'half'} />
                    <Time time={'12 PM'} />
                    <Empty time={'half'} />
                    <Time time={'1 PM'} />
                    <Empty time={'half'} />
                    <Time time={'2 PM'} />
                    <Empty time={'half'} />
                    <Time time={'3 PM'} />
                    <Empty time={'half'} />
                    <Time time={'4 PM'} />
                  </tr>
                </thead>

                <tbody>
                  <tr className={styles.title}>
                    <Department name={'CSE'} rows={4} />
                    <EventPurple name={'Devathon'} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Fun Oasis'} cols={6}/>
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventTeal name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Mock Job Drive'} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'IT'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'ECE'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'EEE'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'CIVIL'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'BME'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'MECH'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'CHEM'} rows={3} />
                    <EventPink name={'Websitica'} cols={8} />
                    <EventBlue name={'Sports Quiz'} cols={3} />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventPurple name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className={styles.eventsMobile}>
              <Container className={styles.cards}>
                <Row>
                  <Col xs={3}>
                    <Card dept={'CSE'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'IT'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'ECE'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'EEE'} handler={handler} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <Card dept={'CIVIL'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'BME'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'MECH'} handler={handler} />
                  </Col>
                  <Col xs={3}>
                    <Card dept={'CHEM'} handler={handler} />
                  </Col>
                </Row>
              </Container>
              {current == 'CSE' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventMPurple name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventMPink name={'Hacker`s Asylum'} rows={8} />
                      <EventMBlue name={'Mock Job Drive'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMTeal name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'IT' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventMPurple name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventMPink name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMBlue name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'ECE' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'EEE' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'CIVIL' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'BME' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'MECH' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
              {current == 'CHEM' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventM name={'Codolympics'} rows={10} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                  </tbody>
                </Table>
              ) : null}
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default Schedule;
