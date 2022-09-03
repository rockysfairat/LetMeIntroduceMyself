// NextJS components:
import Image from "next/image";
import Link from "next/link";
// CSS:
import styles from "../styles/Navbar.module.css";
// Data:
import { navItems } from "../data/data";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {navItems.map(({ id, img, alt, url }) => (
          <li key={id}>
            <Link href={url}>
              <Image src={img} alt={alt} width={300} height={35} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
