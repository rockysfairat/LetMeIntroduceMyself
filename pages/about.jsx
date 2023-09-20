// NextJS components:
import Image from "next/image";
import Head from "next/head";
// Custom components:
import Navbar from "../components/Navbar";
// CSS:
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <article>
      <Head>
        <title>Ålexander Yurchenko: about me</title>
        <link rel="icon" href="/iconTarot.png" />
      </Head>
      <Navbar />
      <article className={styles.article}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgFrame}>
            <Image
              src="/frameBlackAndWhite.png"
              width="220"
              height="280"
              alt="The decorative picture of a fancy frame"
            />
          </div>

          <div className={styles.img}>
            <Image
              src="/me.jpeg"
              width="200"
              height="200"
              alt="The picture of me"
            />
          </div>
        </div>
        <div className={styles.txt}>
          <figure className={styles.dog}>
            <Image src="/deco/dog.png" width="180" height="180" alt="Dog" />
          </figure>
          <h2>Hello!</h2>
          <p>
            My name is Ålexander and I am a frontend developer with two years
            experience of building web interfaces and web sites. I specialize in
            React JS framework.
          </p>
          <h2>Education</h2>
          <p>
            <span>
              Software programming (Front- and Back-end) course at FooCoding,
              Malmö, Sweden (November 2020 – June 2021)
            </span>
            FooCoding is a 26 week front and back end web development course
            provided by the FooCafé Foundation (Malmö). The course consists of
            HTML5/CSS3, JavaScript, React JS, Node JS, MySQL, debugging, and Git
            modules.
          </p>
          <h2>Languages</h2>
          <p>English (proficient), Swedish (basic), Ukrainian (native)</p>
          <h2>Work experience</h2>{" "}
          <p>
            <span>
              Front end web developer (intern) (Sep 2021 – Apr 2022) Revam AB,
              Malmö, Sweden
            </span>{" "}
            Being the all-around frontend developer, my tasks touch everything
            from pen-and paper user-stories and mock-ups to actual coding and
            deployment of components into production. Additionally, I also
            review pull requests, monitor technical metrics and take care of the
            company cactus. Technologies used: React, JavaScript, ES6, GraphQL,
            Material UI.
          </p>
        </div>
      </article>
    </article>
  );
}
