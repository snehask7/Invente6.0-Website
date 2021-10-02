import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import NavbarComp from '../components/Navbar';
import { useNav } from '../lib/navbarstate';
import styles from '../styles/Schedule.module.css';
import Link from 'next/link';

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

const Hackathon = (props) => {
  return (
    <td colSpan={props.cols} className={styles['event'] + ' ' + styles['tan']}>
      <Link href={`/hackathons`} passHref>
        {props.name}
      </Link>
    </td>
  );
};

const HackathonM = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['blue']}
    >
      <Link href={`/hackathons`} passHref className={styles.link}>
        {props.name}
      </Link>
    </td>
  );
};

const EventPurple = (props) => {
  return (
    <td
      colSpan={props.cols}
      className={
        styles['event'] + ' ' + styles['purple'] + ' ' + styles['link']
      }
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventPink = (props) => {
  return (
    <td
      colSpan={props.cols}
      className={styles['event'] + ' ' + styles['pink'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventTan = (props) => {
  return (
    <td
      colSpan={props.cols}
      className={styles['event'] + ' ' + styles['tan'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventBlue = (props) => {
  return (
    <td
      colSpan={props.cols}
      className={styles['event'] + ' ' + styles['blue'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventTeal = (props) => {
  return (
    <td
      colSpan={props.cols}
      className={styles['event'] + ' ' + styles['teal'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventRed = (props) => {
  return (
    <td
      colSpan={props.cols}
      className={styles['event'] + ' ' + styles['red'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventMPurple = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={
        styles['eventM'] + ' ' + styles['purple'] + ' ' + styles['link']
      }
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventMPink = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['pink'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventMTan = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['tan'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventMBlue = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['blue'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventMTeal = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['teal'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
    </td>
  );
};

const EventMRed = (props) => {
  return (
    <td
      rowSpan={props.rows}
      className={styles['eventM'] + ' ' + styles['red'] + ' ' + styles['link']}
    >
      <Link
        key={`event${props.id}`}
        href={`/department/${props.department}/${props.id}`}
        passHref
        className={styles.link}
      >
        {props.name}
      </Link>
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
        <h1 className={navbarToggle ? styles.hide : styles.pageHeading}>
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
                    <EventPurple
                      name={'Mock Job Drive\n(Tests)'}
                      cols={4}
                      id={5}
                      department={'CSE'}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink
                      name={'Codolympics\nPrelims'}
                      cols={4}
                      id={0}
                      department={'CSE'}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink
                      name={'Codolympics\nFinals'}
                      cols={4}
                      id={0}
                      department={'CSE'}
                    />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue
                      name={"Hacker's\nAsylum\nPrelims"}
                      cols={2}
                      id={4}
                      department={'CSE'}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue
                      name={"Hacker's\nAsylum\nFinals"}
                      cols={6}
                      id={4}
                      department={'CSE'}
                    />
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
                    <EventTeal
                      name={'Code Triathlon'}
                      cols={6}
                      id={3}
                      department={'CSE'}
                    />
                    <EventTan
                      name={'Moke Job Drive\n(Interviews)'}
                      cols={6}
                      id={5}
                      department={'CSE'}
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
                    <EventRed
                      name={'Websitica'}
                      cols={6}
                      id={1}
                      department={'IT'}
                    />
                    <EventPurple
                      name={'Reverse Gear'}
                      cols={4}
                      id={3}
                      department={'IT'}
                    />
                    <EventPink
                      name={'Sports Quiz'}
                      cols={4}
                      id={6}
                      department={'IT'}
                    />
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
                    <EventBlue
                      name={'Hackinfinity'}
                      cols={13}
                      id={0}
                      department={'ECE'}
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
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <EventTeal
                      name={'Tinkering\nThoughts'}
                      cols={5}
                      id={3}
                      department={'ECE'}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTan
                      name={'The Big Meg'}
                      cols={5}
                      id={4}
                      department={'ECE'}
                    />
                    <Empty time={'half'} />
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
                    <EventRed
                      name={'Junkyard Jumble'}
                      cols={6}
                      id={6}
                      department={'ECE'}
                    />
                    <EventPurple
                      name={'SketchX'}
                      cols={5}
                      id={9}
                      department={'ECE'}
                    />
                    <Empty time={'half'} />
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
                    <EventPink
                      name={'Inventino\nRound 1'}
                      cols={2}
                      id={5}
                      department={'EEE'}
                    />
                    <EventBlue
                      name={'Tech\nQuiz'}
                      cols={4}
                      id={1}
                      department={'EEE'}
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
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <EventTeal
                      name={'Ideate'}
                      cols={14}
                      id={4}
                      department={'EEE'}
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
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <EventTan
                      name={'Tentukota'}
                      cols={6}
                      id={6}
                      department={'EEE'}
                    />
                    <EventRed
                      name={'Electronic Maze'}
                      cols={6}
                      id={3}
                      department={'EEE'}
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
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple
                      name={'IPL Bidding'}
                      cols={12}
                      id={7}
                      department={'EEE'}
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
                    <EventPink
                      name={'Paper\nPresentation\nRound 1'}
                      cols={4}
                      id={2}
                      department={'Civil'}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue
                      name={'Paper\nPresentation\nRound 2'}
                      cols={4}
                      id={2}
                      department={'Civil'}
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
                    <EventTeal
                      name={'Ace-It\nValorant Championship'}
                      cols={14}
                      id={9}
                      department={'Civil'}
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
                    <EventTan
                      name={'Arch.\nat Zero\nProblem\nStatement\nRelease'}
                      cols={2}
                      id={0}
                      department={'Civil'}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <EventRed
                      name={'Solution\nAU\nProbleme\nRound\n1'}
                      cols={2}
                      id={5}
                      department={'Civil'}
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
                    <EventPurple
                      name={'Bob The\nPlumber\nRound 1'}
                      cols={4}
                      id={7}
                      department={'Civil'}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink
                      name={'\nUnscripted'}
                      cols={8}
                      id={6}
                      department={'Civil'}
                    />
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
                    <EventBlue
                      name={'Paper\nPresentation'}
                      cols={6}
                      id={0}
                      department={'BME'}
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
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal
                      name={'Biomedicathon'}
                      cols={4}
                      id={4}
                      department={'BME'}
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
                    <EventTan
                      name={'Design\nand\nInnovate'}
                      cols={4}
                      id={3}
                      department={'BME'}
                    />
                    <EventRed
                      name={'Thambi Reel\nInum Varala'}
                      cols={4}
                      id={7}
                      department={'BME'}
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
                    <EventPurple
                      name={'Project Exhibition'}
                      cols={8}
                      id={1}
                      department={'Mechanical'}
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
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink
                      name={'Car Wars'}
                      cols={10}
                      id={7}
                      department={'Mechanical'}
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
                    <EventBlue
                      name={'Design and Deal'}
                      cols={12}
                      id={5}
                      department={'Mechanical'}
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
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal
                      name={'Mecathlon'}
                      cols={6}
                      id={3}
                      department={'Mechanical'}
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
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <EventTan
                      name={'Paper Presentation'}
                      cols={12}
                      id={0}
                      department={'Mechanical'}
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
                    <EventRed
                      name={'\nPaper Presentation'}
                      cols={4}
                      id={0}
                      department={'Chemical'}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPurple
                      name={"Invente's\nPictionary\nLeague"}
                      cols={4}
                      id={5}
                      department={'Chemical'}
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
                    <EventPink
                      name={'Be-safe-athon'}
                      cols={4}
                      id={2}
                      department={'Chemical'}
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
                    <Empty time={'half'} />
                    <Empty />
                  </tr>
                  <tr className={styles.title}>
                    <Empty />
                    <Empty time={'half'} />
                    <EventBlue
                      name={"The Commentator's\nConference"}
                      cols={4}
                      id={4}
                      department={'Chemical'}
                    />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal
                      name={'The Last Man\nStanding'}
                      cols={4}
                      id={6}
                      department={'Chemical'}
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

                      <EventMPurple
                        name={'Mock Job Drive Tests'}
                        rows={4}
                        id={5}
                        department={'CSE'}
                      />
                      <Empty time={'half'} />
                      <EventMPink
                        name={'Code Triathlon'}
                        rows={6}
                        id={3}
                        department={'CSE'}
                      />
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
                      <EventMBlue
                        name={'Hacker`s Asylum Prelims'}
                        rows={2}
                        id={4}
                        department={'CSE'}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                      <EventMTeal
                        name={'Codolympics Prelims'}
                        rows={4}
                        id={0}
                        department={'CSE'}
                      />
                      <Empty time={'half'} />
                      <EventMTan
                        name={'Mock Job Drive Interviews'}
                        rows={6}
                        id={5}
                        department={'CSE'}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                      <EventMRed
                        name={'Hacker`s Asylum Finals'}
                        rows={6}
                        id={4}
                        department={'CSE'}
                      />
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
                      <EventMPurple
                        name={'Codolympics Finals'}
                        rows={4}
                        id={0}
                        department={'CSE'}
                      />
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
                      <EventMPink
                        name={'Websitica'}
                        rows={6}
                        id={1}
                        department={'IT'}
                      />
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
                      <EventMBlue
                        name={'Reverse Gear'}
                        rows={4}
                        id={3}
                        department={'IT'}
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

                      <EventMTeal
                        name={'Sports Quiz'}
                        rows={6}
                        id={6}
                        department={'IT'}
                      />
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
                    <tr className={styles.titleM}>
                      <Empty time={'half'} />
                      <EventMTan
                        name={'Hackinfinity'}
                        rows={13}
                        id={0}
                        department={'ECE'}
                      />
                      <EventMRed
                        name={'Tinkering Thoughts'}
                        rows={5}
                        id={3}
                        department={'ECE'}
                      />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPurple
                        name={'Junkyard  Jumble'}
                        rows={6}
                        id={6}
                        department={'ECE'}
                      />
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
                      <EventMPink
                        name={'The Big Meg'}
                        rows={5}
                        id={4}
                        department={'ECE'}
                      />
                      <EventMBlue
                        name={'SketchX'}
                        rows={5}
                        id={9}
                        department={'ECE'}
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
              {current == 'EEE' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventMTeal
                        name={'Inventino Round 1'}
                        rows={2}
                        id={5}
                        department={'EEE'}
                      />
                      <EventMTan
                        name={'Ideate'}
                        rows={14}
                        id={4}
                        department={'EEE'}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMRed
                        name={'Tech Quiz Round 1 & 2'}
                        rows={4}
                        id={1}
                        department={'EEE'}
                      />
                      <EventMPurple
                        name={'Tentukota'}
                        rows={6}
                        id={6}
                        department={'EEE'}
                      />
                      <EventMPink
                        name={'IPL Bidding'}
                        rows={12}
                        id={7}
                        department={'EEE'}
                      />
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
                      <EventMBlue
                        name={'Electronic Maze'}
                        rows={6}
                        id={3}
                        department={'EEE'}
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
                      <EventMTeal
                        name={'Paper Presentation Round 1'}
                        rows={4}
                        id={2}
                        department={'Civil'}
                      />
                      <EventMTan
                        name={'Ace It-Valorant Championship'}
                        rows={14}
                        id={9}
                        department={'Civil'}
                      />
                      <Empty time={'half'} />
                      <EventMRed
                        name={'Bob the Plumber Round 1'}
                        rows={4}
                        id={7}
                        department={'Civil'}
                      />
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
                        id={0}
                        department={'Civil'}
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
                      <EventMPink
                        name={'Paper Presentation Round 2'}
                        rows={4}
                        id={2}
                        department={'Civil'}
                      />
                      <EventMBlue
                        name={'Solution Au Probleme Round 1'}
                        rows={4}
                        id={5}
                        department={'Civil'}
                      />
                      <EventMTeal
                        name={'Unscripted'}
                        rows={8}
                        id={6}
                        department={'Civil'}
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
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMTan
                        name={'Paper Presentation'}
                        rows={6}
                        id={0}
                        department={'BME'}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMRed
                        name={'Biomedicathon'}
                        rows={4}
                        id={4}
                        department={'BME'}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMPurple
                        name={'Design to Innovate'}
                        rows={4}
                        id={3}
                        department={'BME'}
                      />
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
                      <EventMPink
                        name={'Thambi Reel Inum Varla'}
                        rows={4}
                        id={7}
                        department={'BME'}
                      />
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
                      <EventMBlue
                        name={'Car Wars'}
                        rows={10}
                        id={7}
                        department={'Mechanical'}
                      />
                      <EventMTeal
                        name={'Design and Deal'}
                        rows={12}
                        id={5}
                        department={'Mechanical'}
                      />
                      <EventMTan
                        name={'Mechathon'}
                        rows={6}
                        id={3}
                        department={'Mechanical'}
                      />
                      <EventMRed
                        name={'Paper Presentation'}
                        rows={12}
                        id={0}
                        department={'Mechanical'}
                      />
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
                      <EventMPurple
                        name={'Project Exhibition'}
                        rows={8}
                        id={1}
                        department={'Mechanical'}
                      />
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
                      <EventMPink
                        name={'Paper Presentation'}
                        rows={4}
                        id={0}
                        department={'Chemical'}
                      />
                      <EventMBlue
                        name={"The Commentator's Conference"}
                        rows={4}
                        id={4}
                        department={'Chemical'}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMTeal
                        name={'Be-Safe-Athon'}
                        rows={4}
                        id={2}
                        department={'Chemical'}
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
                      <EventMTan
                        name={'Invente`s Pictionary League'}
                        rows={4}
                        id={5}
                        department={'Chemical'}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                      <EventMRed
                        name={'Last Man Standing'}
                        rows={4}
                        id={6}
                        department={'Chemical'}
                      />
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
                      id={1}
                      department={'CSE'}
                    />
                    <EventPink
                      name={'Game Nite'}
                      cols={6}
                      id={7}
                      department={'CSE'}
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
                    <EventBlue
                      name={'Relay in Reverse'}
                      cols={6}
                      id={6}
                      department={'CSE'}
                    />
                    <EventTeal
                      name={'Paper\nPresentation'}
                      cols={4}
                      id={2}
                      department={'CSE'}
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
                    <Hackathon name={'Devathlon (Judging)'} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventRed name={'Analytics Sprint'} cols={4} />
                    <EventPurple name={'Codera'} cols={4} />
                    <EventPink name={'Papyrus'} cols={2} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventBlue name={'Enigma'} cols={4} />
                    <EventTeal name={'E-Treasure Hunt'} cols={4} />
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
                    <EventTan name={'Hackinfinity'} cols={14} />
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
                    <EventRed name={'Debug-a-circuit'} cols={5} />
                    <EventPurple name={'Paper Presentation'} cols={9} />
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
                    <EventPink name={'Enigma'} cols={7} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventTeal name={'IPL Auction'} cols={8} />
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
                    <EventTan name={'Inventino Round 2'} cols={4} />
                    <EventRed name={'Tech Quiz Round 3'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventPurple name={'Paper Presentation'} cols={6} />
                    <EventPink name={'E Bugging'} cols={6} />
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
                    <EventBlue name={'Bob the Plumber Round 2'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventTeal name={'Solution Au Probleme Round 2'} cols={6} />
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
                    <EventTan name={'Quizzards of Oz'} cols={4} />
                    <EventRed name={'Architecture\nat Zero'} cols={2} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventPurple name={'Deal or No Deal'} cols={8} />
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
                    <EventBlue name={'Clash of Minds'} cols={8} />
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
                    <EventTeal name={'Quiz Masters'} cols={4} />
                    <EventTan name={'Entrepreneurship'} cols={6} />
                    <EventRed name={'Medical Auction'} cols={4} />
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
                    <EventPurple name={'Biomedicathon'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventPink name={'Telehealth Web Development'} cols={6} />
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
                    <EventBlue name={'Need for Speed'} cols={10} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventTeal name={'2 Fast 2 Curious'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventTan name={'Mechathlon'} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventRed name={'Quarter Mile'} cols={8} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventPurple name={'Design and Deal'} cols={6} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
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
                    <EventPink name={'Roundabout'} cols={8} />
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
                    <EventBlue name={'Valorant'} cols={14} />
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
                    <EventTeal name={'Paper Presentation'} cols={4} />
                    <EventTan name={'Be-Safe-Athon'} cols={4} />
                    <Empty />
                    <Empty time={'half'} />
                    <Empty />
                    <Empty time={'half'} />
                    <EventRed name={'Ee Sala\nMeme Namadhe'} cols={2} />
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
                    <EventPurple name={"Who's on the\nLeaderbard"} cols={4} />
                    <EventPink name={'Like For Like'} cols={4} />
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
                        id={1}
                        department={'CSE'}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMPink
                        name={'Relay in Reverse'}
                        rows={6}
                        id={6}
                        department={'CSE'}
                      />
                      <HackathonM name={'Devathlon (Judging)'} rows={6} />
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
                      <EventMTeal
                        name={'Game Nite'}
                        rows={6}
                        id={7}
                        department={'CSE'}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'1 PM'} />
                      <EventMTan
                        name={'Paper Presentation'}
                        rows={4}
                        id={2}
                        department={'CSE'}
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
              {current == 'IT' ? (
                <Table className={styles.scheduleTable}>
                  <tbody>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'9 AM'} />
                      <EventMRed name={'Analytics Sprint'} rows={4} />
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
                      <EventMPink name={'Papyrus'} rows={2} />
                      <EventMBlue name={'Enigma'} rows={4} />
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
                      <EventMTan name={'Hackinfinity'} rows={12} />
                      <EventMRed name={'Debug-a-circuit'} rows={5} />
                      <EventMPurple name={'Data Utopia'} rows={4} />
                    </tr>
                    <tr className={styles.titleM}>
                      <Empty time={'half'} />
                      <EventMPink name={'Enigma'} rows={5} />
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
                    <tr className={styles.titleM}>
                      <Empty time={'half'} />
                      <EventMBlue name={'Paper Presentation'} rows={7} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMTeal name={'IPL Auction'} rows={6} />
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
                      <EventMTan name={'Inventino Round 2'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMRed name={'Paper Presentation'} rows={6} />
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
                      <EventMPink name={'E-Bugging Round 1'} rows={2} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                      <EventMBlue name={'E-Bugging Round 2'} rows={2} />
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
                      <EventMTan name={'Bob The Plumber Round 2'} rows={4} />
                      <EventMRed name={'Deal Or No Deal'} rows={8} />
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
                      <EventMPink name={'Netflix Wars'} rows={4} />
                      <EventMBlue name={'Clash of Minds'} rows={8} />
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
                      <EventMTan name={'Quiz Masters'} rows={4} />
                      <EventMRed name={'Biomedicathon'} rows={4} />
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
                      <EventMPink
                        name={'Telehealth Web Development'}
                        rows={6}
                      />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'2 PM'} />
                      <EventMBlue name={'Medical Auction'} rows={4} />
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
                      <EventMTeal name={'Quarter Mile'} rows={8} />
                      <EventMTan name={'Valorant'} rows={14} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'10 AM'} />
                      <EventMRed name={'Need For Speed'} rows={10} />
                      <EventMPurple name={'Mechathlon'} rows={6} />
                      <EventMPink name={'Design and Deal'} rows={6} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'11 AM'} />
                      <EventMBlue name={'2 Fast 2 Curious'} rows={8} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMTeal name={'Roundabout'} rows={8} />
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
                      <EventMTan name={'Paper Presentation'} rows={4} />
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
                      <EventMRed name={'Be-Safe-Athon'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'12 PM'} />
                      <EventMPurple
                        name={"Who's on the Leaderboard"}
                        rows={4}
                      />
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
                      <EventMPink name={'Like for Like'} rows={4} />
                    </tr>
                    <tr className={styles.title}>
                      <Empty time={'half'} />
                    </tr>
                    <tr className={styles.titleM}>
                      <TimeM time={'3 PM'} />
                      <EventMBlue name={'Ee Sala Meme Namadhe'} rows={2} />
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
