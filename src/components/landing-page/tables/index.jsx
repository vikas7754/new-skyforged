import Table from "@/components/table";
import styles from "./tables.module.scss";

const table1 = [
  {
    stage: "1",
    raise: "$25,000",
    price: "0.004",
    tokens: "6.25M",
  },
  {
    stage: "2",
    raise: "$50,000",
    price: "0.005",
    tokens: "10M",
  },
  {
    stage: "3",
    raise: "$100,000",
    price: "0.00666",
    tokens: "15M",
  },
  {
    stage: "4",
    raise: "$200,000",
    price: "0.008",
    tokens: "25M",
  },
  {
    stage: "5",
    raise: "$400,000",
    price: "0.01",
    tokens: "40M",
  },
  {
    stage: "6",
    raise: "$800,000",
    price: "0.01142",
    tokens: "70M",
  },
  {
    stage: "7",
    raise: "$1,600,000",
    price: "0.01333",
    tokens: "120M",
  },
  {
    stage: "8",
    raise: "$3,200,000",
    price: "0.016",
    tokens: "200M",
  },
  {
    stage: "9",
    raise: "$3,625,000",
    price: "0.02",
    tokens: "181.25M",
  },
];

const table2 = [
  {
    stage: "Public pre-sale",
    raise: "66.75",
    price: "667.5M",
    tokens: "Unlocks after public pre-sale is sold out",
  },
  {
    stage: "Treasury",
    raise: "13.25",
    price: "132.5M",
    tokens:
      "40% Unlocked (after public tokens are released), 60% Locked 1 year, 2 year vest",
  },
  {
    stage: "Liquidity",
    raise: "10.00",
    price: "100M",
    tokens: "100% Unlocked for pairing on DEX",
  },
  {
    stage: "Rewards",
    raise: "5.00",
    price: "50M",
    tokens: "100% Unlocked (after public tokens are released)",
  },
  {
    stage: "Team",
    raise: "5.00",
    price: "50M",
    tokens:
      "25% Unlocked (after public tokens are released), 75% Locked 1 year, 1 year vest",
  },
];

function Tables() {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.header}>
          <h2 className="title">pre-sale stages</h2>
          <p>Raising $10,000,000.00 through 9 stages.</p>
        </div>
        <div>
          <Table data={table1} />
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.header}>
          <h2 className="title">tokenomics</h2>
          <p>Fixed supply of 1,000,000,000 tokens.</p>
        </div>
        <div>
          <Table data={table2} />
        </div>
      </div>
    </div>
  );
}

export default Tables;
