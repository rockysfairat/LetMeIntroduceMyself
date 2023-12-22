// NextJS components:
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CSS:
import styles from "../styles/Home.module.css";
// Data:
import { mainMenu } from "../data/data";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ålexander Yurchenko</title>
        <meta name="description" content="Ålexander Yurchenko" />
        <meta property="author" content="Ålexander Yurchenko" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="http://yurchenko.vercel.app/" />
        <meta property="og:title" content="Ålexander Yurchenko" />
        <meta property="og:description" content="Ålexander's personal page" />
        <meta
          property="og:image"
          content="http://raw.githubusercontent.com/rockysfairat/LetMeIntroduceMyself/main/letmeintroducemyself/public/preview.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/iconTarot.png" />
      </Head>
      <header className={styles.header}>
        <Image
          src="/pick-a-card.png"
          width="700"
          height="160"
          alt="Pic a card"
        />
      </header>
      <main className={styles.main}>
        <ul className={styles.ul}>
          {mainMenu.map(({ id, img, alt }) => (
            <li key={id}>
              <Link href={id}>
                <Image
                  src={img}
                  alt={`A tarot card called the ${alt}`}
                  width={450}
                  height={700}
                />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
