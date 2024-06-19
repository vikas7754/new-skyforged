"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import HamBurger from "@/svg/hamburger.svg";

function Navbar() {
  return (
    <nav className={styles.navbar + " container"}>
      <div className={styles.navbar__logo}>
        <h2>Sky Forged</h2>
      </div>
      <button className={styles.toggle}>
        <Image src={HamBurger} alt="Hamburger" width={30} height={30} />
      </button>
      <ul className={styles.navbar__menu}></ul>
    </nav>
  );
}

export default Navbar;
