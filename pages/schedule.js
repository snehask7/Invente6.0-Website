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

const EventM = (props) => {
  return (
    <td colSpan={props.cols} className={styles.event}>
      {props.name}
    </td>
  );
};

const EventPurple = (props) => {
  return (
    <td
      colSpan={props.cols}
      className={styles['event'] + ' ' + styles['purple']}
    >
      {props.name}
    </td>
  );
};

const EventPink = (props) => {
  return (
    <td colSpan={props.cols} className={styles['event'] + ' ' + styles['pink']}>
      {props.name}
    </td>
  );
};

const EventTan = (props) => {
  return (
    <td colSpan={props.cols} className={styles['event'] + ' ' + styles['tan']}>
      {props.name}
    </td>
  );
};

const EventBlue = (props) => {
  return (
    <td colSpan={props.cols} className={styles['event'] + ' ' + styles['blue']}>
      {props.name}
    </td>
  );
};

const EventTeal = (props) => {
  return (
    <td colSpan={props.cols} className={styles['event'] + ' ' + styles['teal']}>
      {props.name}
    </td>
  );
};

const EventMPurple = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['purple']}
    >
      {props.name}
    </td>
  );
};

const EventMPink = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['pink']}
    >
      {props.name}
    </td>
  );
};

const EventMBlue = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['blue']}
    >
      {props.name}
    </td>
  );
};

const EventMTeal = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['teal']}
    >
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
                    <Empty time={'half'} />
                    <Time time={'5 PM'} />
                    <Empty time={'half'} />
                    <Time time={'6 PM'} />
                    <Empty time={'half'} />
                    <Time time={'7 PM'} />
                    <Empty time={'half'} />
                    <Time time={'8 PM'} />
                  </tr>
                </thead>

                <tbody>
                  <tr className={styles.title}>
                    <Department name={'CSE'} rows={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'Mock Job Drive\n(Tests)'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Codolympics\nPrelims'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Codolympics\nFinals'} cols={4} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue name={"Hacker's\nAsylum\nPrelims"} cols={2} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue name={"Hacker's\nAsylum\nFinals"} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Code Triathlon'} cols={6} />
                    <EventTan name={'Moke Job Drive\n(Interviews)'} cols={6} />
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
                    <Department name={'IT'} rows={1} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Websitica'} cols={6} />
                    <EventPurple name={'Reverse Gear'} cols={4} />
                    <EventTan name={'Sports Quiz'} cols={4} />
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
                    <Empty />
                    <EventPink name={'Hackinfinity'} cols={13} />
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
                    <Empty />
                    <EventTeal name={'Tinkering\nThoughts'} cols={5} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'The Big Meg'} cols={5} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'Junkyard Jumble'} cols={6} />
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
                    <EventPink name={'Inventino\nRound 1'} cols={2} />
                    <EventTan name={'Tech\nQuiz'} cols={4} />
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
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventTeal name={'Ideate'} cols={14} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'Tentukota'} cols={6} />
                    <EventBlue name={'Electronic Maze'} cols={6} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Paper\nPresentation\nRound 1'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue name={'Paper\nPresentation\nRound 2'} cols={4} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal
                      name={'Arch.\nat Zero\nProblem\nStatement\nRelease'}
                      cols={2}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal
                      name={'Solution\nAU\nProbleme\nRound\n1'}
                      cols={2}
                    />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'Bob The\nPlumber\nRound 1'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'\nUnscripted'} cols={8} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Paper\nPresentation'} cols={6} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Biomedicathon'} cols={4} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Design\nand\nInnovate'} cols={4} />
                    <EventPurple name={'Reel It'} cols={4} />
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
                    <Department name={'MECH'} rows={5} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Project Exhibition'} cols={8} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Car Wars'} cols={10} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Design and Deal'} cols={12} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Mecathlon'} cols={6} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Paper Presentation'} cols={12} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'\nPaper Presentation'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue
                      name={"Invente's\nPictionary\nLeague"}
                      cols={4}
                    />
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
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Be-safe-athon'} cols={4} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={"Who's the\nleaderboard"} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'The Last Man\nStanding'} cols={4} />
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
                </tbody>
              </Table>
            </div>

            <div className={styles.eventsMobile}>
              <Container className={navbarToggle ? styles.hide : styles.cards}>
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
                    <Empty time={'half'} />
                    <Time time={'5 PM'} />
                    <Empty time={'half'} />
                    <Time time={'6 PM'} />
                    <Empty time={'half'} />
                    <Time time={'7 PM'} />
                    <Empty time={'half'} />
                    <Time time={'8 PM'} />
                  </tr>
                </thead>

                <tbody>
                  <tr className={styles.title}>
                    <Department name={'CSE'} rows={4} />
                    <EventPurple
                      name={'Dev Heist (prelims + Finals)'}
                      cols={6}
                    />
                    <EventPink name={'Game Nite'} cols={6} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue name={'Relay in Reverse'} cols={6} />
                    <EventTeal name={'Paper\nPresentation'} cols={4} />
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
                    <EventTeal name={'Devathlon (Judging)'} cols={6} />
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
                    <Empty time={'half'} />
                    <Empty />
                  </tr>

                  <tr className={styles.title}>
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
                    <EventPink name={'Analytics Sprint'} cols={4} />
                    <EventBlue name={'Codera'} cols={4} />
                    <EventTeal name={'Papyrus'} cols={2} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTan name={'Enigma'} cols={4} />
                    <EventPurple name={'E-Treasure Hunt'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
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
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Department name={'ECE'} rows={3} />
                    <EventPink name={'Hackinfinity'} cols={14} />
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
                    <EventPurple name={'Debug-a-circuit'} cols={5} />
                    <EventTeal name={'Paper Presentation'} cols={9} />
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
                    <Empty />
                    <EventTan name={'Enigma'} cols={7} />
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
                    <Empty time={'half'} />
                    <EventBlue name={'Data Utopia'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'IPL Auction'} cols={8} />
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
                    <EventPink name={'Inventino Round 2'} cols={4} />
                    <EventBlue name={'Tech Quiz Round 3'} cols={4} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Paper Presentation'} cols={6} />
                    <EventPurple name={'E Bugging'} cols={6} />
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
                    <EventPink name={'Bob the Plumber Round 2'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue name={'Solution Au Probleme Round 2'} cols={6} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'Quizzards of Oz'} cols={4} />
                    <EventTan name={'Architecture\nat Zero'} cols={2} />
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
                    <EventTeal name={'Deal or No Deal'} cols={8} />
                    <EventPink name={'Netflix Wars'} cols={4} />
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
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'Clash of Minds'} cols={8} />
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
                    <EventPink name={'Quiz Masters'} cols={4} />
                    <EventBlue name={'Entrepreneurship'} cols={6} />
                    <EventPurple name={'Medical Auction'} cols={4} />
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
                    <EventTan name={'Biomedicathon'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Telehealth Web Development'} cols={6} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Need for Speed'} cols={10} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue name={'2 Fast 2 Curious'} cols={8} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'Mechathlon'} cols={6} />
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
                    <Empty time={'half'} />
                    <EventTan name={'Quarter Mile'} cols={8} />
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
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Design and Deal'} cols={6} />
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
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'Roundabout'} cols={8} />
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
                    <EventTan name={'Valorant'} cols={14} />
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
                    <EventPink name={'Paper Presentation'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue name={'Be-Safe-Athon'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'Ee Sala\nMeme Namadhe'} cols={2} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Like for Like'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTan name={"Commentator's Conference"} cols={4} />
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
