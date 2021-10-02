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
                    <EventPurple name={'SketchX'} cols={5} />
                    <Empty time={'half'} />
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
                    <Department name={'EEE'} rows={4} />
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
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple name={'IPL Bidding'} cols={12} />
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
                    <Department name={'CIVIL'} rows={4} />
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
                      name={'Ace-It\nValorant Championship'}
                      cols={14}
                    />
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
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />

                      <EventMPurple name={'Mock Job Drive Tests'} rows={4} />
                      <Empty time={'half'} />
                      <EventMBlue name={'Code Triathlon'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <Empty time={'half'} />
                      <EventMBlue name={'Hacker`s Asylum Prelims'} rows={2} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                      <EventMTeal name={'Codolympics Prelims'} rows={4} />
                      <Empty time={'half'} />
                      <EventMPurple
                        name={'Mock Job Drive Interviews'}
                        rows={6}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                      <EventMTeal name={'Hacker`s Asylum Finals'} rows={6} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                      <EventMPurple name={'Codolympics Finals'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple name={'Websitica'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
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
                      <Empty time={'half'} />
                      <EventMTeal name={'Reverse Gear'} rows={4} />
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

                      <EventMPurple name={'Sports Quiz'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                      <EventMPurple name={'Hackinfinity'} rows={13} />
                      <EventMTeal name={'Tinkering Thoughts'} rows={5} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMBlue name={'Junkyard  Jumble'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
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
                      <EventMTeal name={'The Big Meg'} rows={5} />
                      <EventMPink name={'SketchX'} rows={5} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <EventMPurple name={'Inventino Round 1'} rows={2} />
                      <EventMPurple name={'Ideate'} rows={14} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple name={'Tech Quiz Round 1 & 2'} rows={4} />
                      <EventMPurple name={'Tentukota'} rows={6} />
                      <EventMPurple name={'IPL Bidding'} rows={12} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
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
                      <Empty time={'half'} />
                      <EventMTeal name={'Electronic Maze'} rows={6} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple
                        name={'Paper Presentation Round 1'}
                        rows={4}
                      />
                      <EventMPurple
                        name={'Ace It-Valorant Championship'}
                        rows={14}
                      />
                      <Empty time={'half'} />
                      <EventMPurple name={'Bob the Plumber Round 1'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMPurple
                        name={
                          'Architecture At Zero - Problem Statement Release'
                        }
                        rows={2}
                      />
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
                      <EventMTeal
                        name={'Paper Presentation Round 2'}
                        rows={4}
                      />
                      <EventMTeal
                        name={'Solution Au Probleme Round 1'}
                        rows={4}
                      />
                      <EventMTeal name={'Unscripted'} rows={8} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple name={'Paper Presentation'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMPurple name={'Biomedicathon'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMPurple name={'Design to Innovate'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                      <EventMPurple name={'Reel It'} rows={4} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple name={'Car Wars'} rows={10} />
                      <EventMPurple name={'Design and Deal'} rows={12} />
                      <EventMPurple name={'Mechathon'} rows={6} />
                      <EventMPurple name={'Paper Presentation'} rows={12} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMPurple name={'Project Exhibition'} rows={8} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple name={'Paper Presentation'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMPurple name={'Who`s the leaderboard'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMPurple name={'Be-Safe-Athon'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                      <EventMTeal
                        name={'Invente`s Pictionary League'}
                        rows={4}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                      <EventMTeal name={'Last Man Standing'} rows={4} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <EventMPurple
                        name={'Dev Heist (Prelims + Finals)'}
                        rows={6}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple name={'Relay in Reverse'} rows={6} />
                      <EventMPurple name={'Devathlon (Judging)'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMPurple name={'Game Nite'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                      <EventMTeal name={'Paper Presentation'} rows={4} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <EventMPurple name={'Analytics Sprint'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMPurple name={'Codera'} rows={4} />
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
                      <EventMTeal name={'Papyrus'} rows={2} />
                      <EventMTeal name={'Enigma'} rows={4} />
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
                      <EventMTeal name={'E-Treasure Hunt'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <EventMTeal name={'Hackinfinity'} rows={12} />
                      <EventMTeal name={'Debug-a-circuit'} rows={5} />
                      <EventMTeal name={'Data Utopia'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                      <EventMTeal name={'Enigma'} rows={5} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                      <EventMTeal name={'Paper Presentation'} rows={7} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMPurple name={'IPL Auction'} rows={6} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <EventMPurple name={'Inventino Round 2'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple name={'Paper Presentation'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMPurple name={'Tech Quiz Round 3'} rows={4} />
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
                      <EventMTeal name={'E-Bugging Round 1'} rows={2} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                      <EventMTeal name={'E-Bugging Round 2'} rows={2} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                      <EventMTeal name={'E-Bugging Round 3'} rows={2} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <EventMPurple name={'Bob The Plumber Round 2'} rows={4} />
                      <EventMPurple name={'Deal Or No Deal'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMPurple name={'Quizzards of Oz'} rows={4} />
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
                      <EventMTeal
                        name={'Solution Au Probleme Round 2'}
                        rows={6}
                      />
                      <EventMTeal name={'Netflix Wars'} rows={4} />
                      <EventMTeal name={'Clash of Minds'} rows={8} />
                      <EventMTeal
                        name={'Architecture At Zero Submission'}
                        rows={2}
                      />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <EventMPurple name={'Quiz Masters'} rows={4} />
                      <EventMPurple name={'Biomedicathon'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMPurple name={'Entrepreneurship'} rows={6} />
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
                      <EventMTeal
                        name={'Telehealth Web Development'}
                        rows={6}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                      <EventMTeal name={'Medical Auction'} rows={4} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <EventMPurple name={'Quarter Mile'} rows={8} />
                      <EventMPurple name={'Valorant'} rows={14} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple name={'Need For Speed'} rows={10} />
                      <EventMPurple name={'Mechathlon'} rows={6} />
                      <EventMPurple name={'Design and Deal'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMPurple name={'2 Fast 2 Curious'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMPurple name={'Roundabout'} rows={8} />
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
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
                      <EventMPurple name={'Paper Presentation'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMPurple name={'Like For Like'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMPurple name={'Be-Safe-Athon'} rows={4} />
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
                      <EventMTeal
                        name={'The Commentator`s Conference'}
                        rows={4}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                      <EventMPurple name={'Ee Sala Meme Namadhe'} rows={2} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'4 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'5 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'6 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'7 PM'} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'8 PM'} />
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
