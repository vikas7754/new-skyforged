"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import HamBurger from "@/svg/hamburger.svg";
import Link from "next/link";
import { useState } from "react";

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

const time = "2024-12-31T00:00:00";

function Navbar() {
  const [show, setShow] = useState(false);

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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
