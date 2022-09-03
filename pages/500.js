// NextJS components:
import Image from "next/image";
import Head from "next/head";
// Custom components:
import Navbar from "../components/Navbar";
// CSS:
import styles from "../styles/404_500.module.css";

export default function Custom500() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Head>
        <title>Ålexander Yurchenko: Internal server error</title>
        <link rel="icon" href="/iconTarot.png" />
      </Head>
      <Image
        src="/500.jpg"
        width={300}
        height={450}
        alt="A tarot card called The Tower"
      />
      <Image
        src="/errorserver.jpg"
        width={250}
        height={45}
        alt="Internal server error"
      />
      <p>The link is broken or the page you are trying to reach was removed</p>
    </div>
  );
}
