import Link from 'next/link';
import React, { useState } from "react";
import styles from "../styles/Events.module.css";
import { Table }  from 'react-bootstrap';

function Events() {

  return <div className={styles.container}>

    <main>
        <h1 className={styles.heading}>EVENTS</h1>
      <div className={styles.eventsCard}>
        <Table>
            <thead>
                <tr className={styles.title}>
                    <th  className={styles.dept}> </th>
                    <th  className={styles.time}>9 AM </th><th  className={styles.half}>          </th>
                    <th  className={styles.time}>10 AM</th><th  className={styles.half}>          </th>
                    <th  className={styles.time}>11 AM</th><th  className={styles.half}>          </th>
                    <th  className={styles.time}>12 PM</th><th  className={styles.half}>          </th>
                    <th  className={styles.time}>1 PM </th><th  className={styles.half}>          </th>
                    <th  className={styles.time}>2 PM </th><th  className={styles.half}>          </th>
                    <th  className={styles.time}>3 PM </th><th  className={styles.half}>          </th>
                    <th  className={styles.time}>4 PM</th>
                </tr>
            </thead>
            
            <tbody>
                <tr className={styles.title}>
                    <th className={styles.dept} rowSpan="4">CSE </th>
                    <td colSpan="6" className={styles["event"] + " " + styles["pink"]}>Web-it-out</td>
                    <td className={styles.event}> </td><th  className={styles.half}>          </th>
                    <td colSpan="6" className={styles["event"] + " " + styles["turq"]}>Fun Oasis</td>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td colSpan="10" className={styles["event"] + " " + styles["blue"]}>Codolympics</td>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td colSpan="8" className={styles["event"] + " " + styles["green"]}>Hacker`s Asylum</td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td colSpan="6" className={styles["event"] + " " + styles["purple"]}>Mock Job Drive</td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.dept}></td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                </tr>
                <tr className={styles.title}>
                    <th className={styles.dept} rowSpan="3">IT </th>
                    <td colSpan="8" className={styles["event"] + " " + styles["light_blue"]}>Websitica</td>
                    <td colSpan="3" className={styles["event"] + " " + styles["maroon"]}>Sports Quiz</td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td colSpan="10" className={styles["event"] + " " + styles["blue"]}>Codolympics</td>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td colSpan="8" className={styles["event"] + " " + styles["green"]}>Hacker`s Asylum</td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.dept}></td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                </tr>
                <tr className={styles.title}>
                <th className={styles.dept} rowSpan="3">ECE </th>
                    <td colSpan="8" className={styles["event"] + " " + styles["light_blue"]}>Websitica</td>
                    <td colSpan="3" className={styles["event"] + " " + styles["maroon"]}>Sports Quiz</td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td colSpan="10" className={styles["event"] + " " + styles["blue"]}>Codolympics</td>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td colSpan="8" className={styles["event"] + " " + styles["green"]}>Hacker`s Asylum</td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.dept}></td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                </tr>
                <tr className={styles.title}>
                <th className={styles.dept} rowSpan="3">EEE </th>
                    <td colSpan="8" className={styles["event"] + " " + styles["light_blue"]}>Websitica</td>
                    <td colSpan="3" className={styles["event"] + " " + styles["maroon"]}>Sports Quiz</td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td colSpan="10" className={styles["event"] + " " + styles["blue"]}>Codolympics</td>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td colSpan="8" className={styles["event"] + " " + styles["green"]}>Hacker`s Asylum</td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.dept}></td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                </tr>
                <tr className={styles.title}>
                <th className={styles.dept} rowSpan="3">CIVIL </th>
                    <td colSpan="8" className={styles["event"] + " " + styles["light_blue"]}>Websitica</td>
                    <td colSpan="3" className={styles["event"] + " " + styles["maroon"]}>Sports Quiz</td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td colSpan="10" className={styles["event"] + " " + styles["blue"]}>Codolympics</td>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td colSpan="8" className={styles["event"] + " " + styles["green"]}>Hacker`s Asylum</td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.dept}></td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                </tr>
                <tr className={styles.title}>
                <th className={styles.dept} rowSpan="3">BME </th>
                    <td colSpan="8" className={styles["event"] + " " + styles["light_blue"]}>Websitica</td>
                    <td colSpan="3" className={styles["event"] + " " + styles["maroon"]}>Sports Quiz</td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td colSpan="10" className={styles["event"] + " " + styles["blue"]}>Codolympics</td>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td colSpan="8" className={styles["event"] + " " + styles["green"]}>Hacker`s Asylum</td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.dept}></td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                </tr>
                <tr className={styles.title}>
                <th className={styles.dept} rowSpan="3">MECH </th>
                    <td colSpan="8" className={styles["event"] + " " + styles["light_blue"]}>Websitica</td>
                    <td colSpan="3" className={styles["event"] + " " + styles["maroon"]}>Sports Quiz</td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td colSpan="10" className={styles["event"] + " " + styles["blue"]}>Codolympics</td>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td colSpan="8" className={styles["event"] + " " + styles["green"]}>Hacker`s Asylum</td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.dept}></td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                </tr>
                <tr className={styles.title}>
                <th className={styles.dept} rowSpan="3">CHEM </th>
                    <td colSpan="8" className={styles["event"] + " " + styles["light_blue"]}>Websitica</td>
                    <td colSpan="3" className={styles["event"] + " " + styles["maroon"]}>Sports Quiz</td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                    <th  className={styles.half}>          </th>
                    <td colSpan="10" className={styles["event"] + " " + styles["blue"]}>Codolympics</td>
                    <td className={styles.event}></td>
                </tr>
                <tr className={styles.title}>
                    <td colSpan="8" className={styles["event"] + " " + styles["green"]}>Hacker`s Asylum</td>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td><th  className={styles.half}>          </th>
                    <td className={styles.event}></td>
                </tr>
            </tbody>
        </Table> 
      </div>
    </main>
  </div>
    ;
};

export default Events;