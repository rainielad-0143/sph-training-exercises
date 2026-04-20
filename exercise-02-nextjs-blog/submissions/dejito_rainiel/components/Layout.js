import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/Layout.module.css";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      <header className={styles.siteHeader}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.siteLogo}>
              B<span>.</span>Logz
            </Link>

            <nav className={styles.siteNav}>
              <Link
                href="/"
                className={[
                  styles.navLink,
                  pathname === "/" ? styles.active : "",
                ].join(" ")}
              >
                Posts
              </Link>

              <Link
                href="/about"
                className={`${styles.navLink} ${
                  pathname === "/about" ? styles.active : ""
                }`}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className={styles.mainContainer}>{children}</main>

      <footer className={styles.siteFooter}>
        <p>© {new Date().getFullYear()} B.Logz — Built with Next.js</p>
      </footer>
    </>
  );
}
