// NextJS components:
import Image from "next/image";
import Head from "next/head";
// Custom components:
import Navbar from "../components/Navbar";
// CSS:
import styles from "../styles/404_500.module.css";

export default function Custom404() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Head>
        <Head>
          <title>Ålexander Yurchenko: Page not found!</title>
          <link rel="icon" href="/iconTarot.png" />
        </Head>
      </Head>
      <Image
        src="/404.jpg"
        width={300}
        height={450}
        alt="A tarot card called The Tower"
      />
      <Image
        src="/pagenotfound.jpg"
        width={250}
        height={45}
        alt="Page not found!"
      />
      <p>The link is broken or the page you are trying to reach was removed</p>
    </div>
  );
}
