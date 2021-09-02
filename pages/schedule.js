import React, { useEffect, useState } from 'react';
import styles from '../styles/Schedule.module.css';
import { Table, Col, Container, Row } from 'react-bootstrap';
import NavbarComp from '../components/Navbar';

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

const EventM = (props) => {
  return (
    <td rowSpan={props.rows} className={styles.eventM}>
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
        <h1 className={styles.heading}>SCHEDULE</h1>
        {day == 1 ? (
          <div>
            <span className={styles.daySel}>
              Day 1<div className={styles.underline}></div>
            </span>
            <span
              className={styles.day}
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
                    <Event name={'Day 1 event'} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <Event name={'Fun Oasis'} cols={6} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Mock Job Drive'} cols={6} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                      <EventM name={'Mock Job Drive'} rows={6} />
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
              {current == 'IT' ? (
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
              className={styles.day}
              onClick={() => {
                changeDay(1);
              }}
            >
              Day 1
            </span>

            <span className={styles.daySel}>
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
                    <Event name={'Web-it-out'} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <Event name={'Fun Oasis'} cols={6} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Mock Job Drive'} cols={6} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                    <Event name={'Websitica'} cols={8} />
                    <Event name={'Sports Quiz'} cols={3} />
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
                    <Event name={'Codolympics'} cols={10} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Event name={'Hacker`s Asylum'} cols={8} />
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
                      <EventM name={'Web-it-out'} rows={6} />
                      <Empty time={'half'} />
                      <EventM name={'Hacker`s Asylum'} rows={8} />
                      <EventM name={'Mock Job Drive'} rows={6} />
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
              {current == 'IT' ? (
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
