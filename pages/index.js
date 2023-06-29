import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css";
import styles from "../styles/Home.module.css";
import { Button, message } from "antd";
import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function oopsFunc() {
    let obj = {};
    // An error gets thrown here
    obj.oops.oops;
  }

  const throwFrontendError = () => {
    oopsFunc();
  };

  const throwBackendError = () => {
    fetch("/api/oops").then(() => {
      message.error("Just threw a backend error!");
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Highlight + Next.js + {count}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Highlight + Next.js</h1>

        <div className={styles.grid}>
          <Button className={styles.card} onClick={throwFrontendError}>
            Throw a frontend error!
          </Button>
          <Button className={styles.card} onClick={throwBackendError}>
            Throw a backend error!
          </Button>
        </div>
      </main>
    </div>
  );
}
