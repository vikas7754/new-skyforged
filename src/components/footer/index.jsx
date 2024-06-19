import Link from "next/link";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer + " container"}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.about}>
            <div className={styles.logo}>
              <Link href="/">
                <h2 className="brand">SKY FORGED</h2>
              </Link>
            </div>
            <div className={styles.aboutText}>
              <p>
                Sky Forged is an upcoming Extraction MMORPG, <br /> setting a
                new standard for Web3 gaming.
              </p>
            </div>
            <div className={styles.btn}>
              <Link href="/" className="btn-golden">
                <span className="">PURCHASE $SKYF</span>
              </Link>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link href="/">Back to top</Link>
                </li>
                <li>
                  <Link href="/all">About game</Link>
                </li>
                <li>
                  <Link href="/utilities">Roadmap</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">SKYF token</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <h3>Community</h3>
              <ul>
                <li>
                  <Link href="/">twitter</Link>
                </li>
                <li>
                  <Link href="/all">discord</Link>
                </li>
                <li>
                  <Link href="/utilities">telegram</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">reddit</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <h3>Useful</h3>
              <ul>
                <li>
                  <Link href="/">white paper</Link>
                </li>
                <li>
                  <Link href="/all">airdrop</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.copyright}>
        <h4>© copyright 2024 | sky forged</h4>
        <p>PRIVACY POLICY</p>
      </div>
    </footer>
  );
}

export default Footer;
