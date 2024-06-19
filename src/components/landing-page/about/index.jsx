import Link from "next/link";
import styles from "./about.module.scss";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>How to participate in the public pre-sale</h2>
        <p>
          Need help? Join our <Link href="/">Discord</Link> and submit a ticket
          in the #support-ticket channel.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <h3>
            <span>1:</span> Set up a wallet
          </h3>
          <p>
            Set up a wallet with base chain support, such as a{" "}
            <Link href={"/"}>Coinbase Wallet</Link>.
          </p>
        </div>
        <div className={styles.box}>
          <h3>
            <span>1:</span> Set up a wallet
          </h3>
          <p>
            Set up a wallet with base chain support, such as a{" "}
            <Link href={"/"}>Coinbase Wallet</Link>.
          </p>
        </div>
        <div className={styles.box}>
          <h3>
            <span>1:</span> Set up a wallet
          </h3>
          <p>
            Set up a wallet with base chain support, such as a{" "}
            <Link href={"/"}>Coinbase Wallet</Link>.
          </p>
        </div>
        <div className={styles.box}>
          <h3>
            <span>1:</span> Set up a wallet
          </h3>
          <p>
            Set up a wallet with base chain support, such as a{" "}
            <Link href={"/"}>Coinbase Wallet</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
