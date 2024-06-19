"use client";
import { useState } from "react";
import styles from "./table.module.scss";

function Table({ data }) {
  const [active, setActive] = useState(null);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={active === index ? styles.active : ""}
            onClick={() => setActive(index)}
          >
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
