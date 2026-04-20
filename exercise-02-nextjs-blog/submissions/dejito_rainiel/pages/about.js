import Head from "next/head";
import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About — B.Logz</title>
        <meta name="description" content="About the author of B.Logz" />
      </Head>

      <div className={styles.aboutWrap}>
        <header className={styles.aboutHeader}>
          <p className={styles.aboutLabel}>The Author</p>
          <h1>Rainiel D.</h1>
        </header>

        <div className={styles.aboutBody}>
          <div className={styles.aboutBio}>
            <p>
              I&apos;m a writer, reader, and occasional tinkerer living in Cebu
              City, Philippines. This blog is where I think out loud — slowly,
              carefully, and without a content calendar.
            </p>
            <p>
              I write about the things I find myself returning to: how we spend
              attention, what makes tools enjoyable, why some habits stick and
              others don&apos;t, and the quiet satisfaction of doing ordinary
              things well.
            </p>
            <p>
              By day I work in software development, which means I spend a
              disproportionate amount of time thinking about keyboards, editors,
              and why the simplest solution is usually the right one.
            </p>
            <p>
              I&apos;m not trying to grow an audience or build a brand. I&apos;m
              just trying to think more clearly — and writing is how I do that.
              If something here is useful to you, that&apos;s a bonus I&apos;m
              genuinely glad for.
            </p>
            <p>
              You can reach me at <strong>username@email.dev</strong> if you
              want to talk about any of it.
            </p>
          </div>

          <aside className={styles.aboutSidebar}>
            <div className={styles.aboutCard}>
              <h3>Currently Reading</h3>
              <ul>
                <li>Thinking, Fast and Slow</li>
                <li>The Timeless Way of Building</li>
                <li>Meditations — Marcus Aurelius</li>
              </ul>
            </div>

            <div className={styles.aboutCard}>
              <h3>Interests</h3>
              <ul>
                <li>Mechanical keyboards</li> <li>Stoic philosophy</li>
                <li>Home cooking</li> <li>Typography</li>
                <li>Note-taking systems</li>
              </ul>
            </div>

            <div className={styles.aboutCard}>
              <h3>Tools I Use</h3>
              <ul>
                <li>VS Code + Neovim</li>
                <li>NextJS</li>
                <li>Custom 60% keyboard</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
