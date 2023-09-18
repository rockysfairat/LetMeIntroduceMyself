// NextJS components:
import Image from "next/image";
import Link from "next/link";
// React components:
import { useState } from "react";
// CSS:
import styles from "../styles/Navbar.module.css";
// Data:
import { navItems } from "../data/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.wideScreen}>
        {navItems.map(({ id, img, alt, url }) => (
          <li className={styles.li} key={id}>
            <Link href={url}>
              <Image src={img} alt={alt} width={300} height={35} />
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul
        className={`${styles.menuItems} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        {navItems.map(({ id, img, alt, url }) => (
          <li className={styles.li} key={id}>
            <Link href={url}>
              <Image src={img} alt={alt} width={300} height={35} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
