import Link from "next/link";

import Container from "@components/Container";

import styles from "./Header.module.scss";

import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">TV Tracker</Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <SignedOut>
              <Link href="/dashboard">Login</Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
