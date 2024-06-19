import Link from "next/link";
import styles from "./hero.module.scss";

function HeroSection() {
  return (
    <div className={styles.container}>
      <div>
        <h3>first extraction mmorpg</h3>
        <h1>transforming the web3 gaming landscape</h1>
        <p>
          Sky Forged is redefining Web3 gaming by building the world's first
          Extraction MMORPG using UE5 and Base. Fed up with the gaming industry
          and the mediocere state of Web3 gaming as a whole, we are taking
          matters into our own hands. A 100% community funded project for
          gamers, by gamers.
        </p>
        <div>
          <Link href="/#">White paper</Link>
          <Link href="/#">View audit</Link>
        </div>
      </div>
      <div>
        <div className={styles.card}>
          <h3>june 24th 4pm utc</h3>
          <h2>$SKYF token pre-sale</h2>
          <div></div>
          <div>
            <div>Funded: $0</div>
            <div>Target: $25,000</div>
          </div>
          <div>
            <div>
              <div>Current price</div>
              <div>0.004 USDC</div>
            </div>
            <div>
              <div>Next price</div>
              <div>0.005 USDC</div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <i></i>
                <span>USDC</span>
              </div>
              <div>0</div>
            </div>
            <div></div>
            <div>
              <div>
                <i></i>
                <span>$SKYF</span>
              </div>
              <div>0</div>
            </div>
          </div>
          <div>
            <div>Min: $10</div>
            <div>1 USDC = 250 SKYF</div>
          </div>
          <div>
            <h2>$skyf sold</h2>
            <h4>0 out of 667.5M</h4>
          </div>
          <div>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
