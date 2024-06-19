import Link from "next/link";
import styles from "./hero.module.scss";
import ArrowDownwardIcon from "@/svg/arrow-down.svg";
import Dollor from "@/svg/dollor.svg";
import Skyf from "@/svg/skyf.svg";
import Image from "next/image";

function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.sub_heading}>first extraction mmorpg</h3>
        <h1 className={styles.main_heading}>
          transforming the web3 gaming landscape
        </h1>
        <p>
          Sky Forged is redefining Web3 gaming by building the world's first
          Extraction MMORPG using UE5 and Base. Fed up with the gaming industry
          and the mediocere state of Web3 gaming as a whole, we are taking
          matters into our own hands. A 100% community funded project for
          gamers, by gamers.
        </p>
        <div className={styles.btns}>
          <Link href="/#" className="btn-primary">
            White paper
          </Link>
          <Link href="/#" className="btn-secondary">
            View audit
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>
          <h3 className={styles.top_title}>june 24th 4pm utc</h3>
          <h2 className={styles.title}>$SKYF token pre-sale</h2>
          <div className={styles.line}></div>
          <div className={styles.progress}>
            <div>Funded: $0</div>
            <div>Target: $25,000</div>
          </div>
          <div className={styles.price}>
            <div className={styles.current}>
              <div className={styles.label}>Current price</div>
              <div className={styles.amount}>0.004 USDC</div>
            </div>
            <div className={styles.next}>
              <div className={styles.label}>Next price</div>
              <div className={styles.amount}>0.005 USDC</div>
            </div>
          </div>
          <div className={styles.conversions}>
            <div className={styles.USDC}>
              <div className={styles.label}>
                <Image src={Dollor} alt="Dollor" width={35} height={35} />
                <span>USDC</span>
              </div>
              <div className={styles.amount}>0</div>
            </div>
            <div className={styles.convert_btn}>
              <Image
                src={ArrowDownwardIcon}
                alt="Arrow Downward"
                width={25}
                height={25}
              />
            </div>
            <div className={styles.SKYF}>
              <div className={styles.label}>
                <Image src={Skyf} alt="Skyf" width={35} height={35} />
                <span>$SKYF</span>
              </div>
              <div className={styles.amount}>0</div>
            </div>
          </div>
          <div className={styles.progress}>
            <div>Min: $10</div>
            <div>1 USDC = 250 SKYF</div>
          </div>
          <div>
            <h2 className={styles.title}>$skyf sold</h2>
            <h4 className={styles.sub_heading_1}>0 out of 667.5M</h4>
          </div>
          <div className={styles.btn}>
            <button className="btn-golden">
              <span className="golden-text">Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
