import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About — the.journal</title>
        <meta name="description" content="About the author of the.journal" />
      </Head>

      <div className="about-wrap">
        <header className="about-header">
          <p className="about-label">The Author</p>
          <h1>Juan Dela Cruz</h1>
        </header>

        <div className="about-body">
          <div className="about-bio">
            <p>
              I&apos;m a writer, reader, and occasional tinkerer living in Cebu City,
              Philippines. This blog is where I think out loud — slowly, carefully,
              and without a content calendar.
            </p>
            <p>
              I write about the things I find myself returning to: how we spend
              attention, what makes tools enjoyable, why some habits stick and
              others don&apos;t, and the quiet satisfaction of doing ordinary things
              well.
            </p>
            <p>
              By day I work in software development, which means I spend a
              disproportionate amount of time thinking about keyboards, editors,
              and why the simplest solution is usually the right one.
            </p>
            <p>
              I&apos;m not trying to grow an audience or build a brand. I&apos;m just
              trying to think more clearly — and writing is how I do that. If
              something here is useful to you, that&apos;s a bonus I&apos;m genuinely glad
              for.
            </p>
            <p>
              You can reach me at{' '}
              <strong>juan [at] thejournal [dot] dev</strong> if you want to talk
              about any of it.
            </p>
          </div>

          <aside className="about-sidebar">
            <div className="about-card">
              <h3>Currently Reading</h3>
              <ul>
                <li>Thinking, Fast and Slow</li>
                <li>The Timeless Way of Building</li>
                <li>Meditations — Marcus Aurelius</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>Interests</h3>
              <ul>
                <li>Mechanical keyboards</li>
                <li>Stoic philosophy</li>
                <li>Home cooking</li>
                <li>Typography</li>
                <li>Note-taking systems</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>Tools I Use</h3>
              <ul>
                <li>VS Code + Neovim</li>
                <li>Next.js</li>
                <li>Obsidian</li>
                <li>Custom 65% keyboard</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
