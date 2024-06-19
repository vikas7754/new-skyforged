"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import HamBurger from "@/svg/hamburger.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  {
    name: "About game",
    link: "/",
  },
  {
    name: "Roadmap",
    link: "/",
  },
  {
    name: "skyf token",
    link: "/",
  },
  {
    name: "white paper",
    link: "/",
  },
  {
    name: "token sale",
    link: "/",
  },
];

const time = "2024-07-30T00:00:00";

function Navbar() {
  const [show, setShow] = useState(false);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeLeft = () => {
    const difference = +new Date(time) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    setDays(timeLeft.days);
    setHours(timeLeft.hours);
    setMinutes(timeLeft.minutes);
    setSeconds(timeLeft.seconds);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className={styles.navbar + " container"}>
      <div className={styles.navbar__logo}>
        <h2>Sky Forged</h2>
      </div>
      <button className={styles.toggle} onClick={() => setShow(true)}>
        <Image src={HamBurger} alt="Hamburger" width={30} height={30} />
      </button>
      <div className={`${styles.menu} ${show && styles.show}`}>
        <div className={styles.navbar_menu}>
          <button className={styles.close} onClick={() => setShow(false)}>
            X
          </button>
          <ul>
            {nav.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <span>0{index + 1}</span> {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.time}>
            <h3>pre-sale start</h3>
            <div className={styles.timer}>
              <div>{days}</div>
              <span>:</span>
              <div>{hours}</div>
              <span>:</span>
              <div>{minutes}</div>
              <span>:</span>
              <div>{seconds}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
