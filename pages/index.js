import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import Profile from "../components/Github/Profile";
import styles from "../styles/Home.module.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    "https://api.github.com/users/nanderLP",
    (url) =>
      fetcher(url, {
        headers: { Accept: "application/vnd.github.v3+json" },
      })
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Nander</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="homepage of Nander."></meta>
      </Head>

      <main className={styles.main}>
        <div className={styles.side}>
          <div>
            <Image
              src="https://github.com/nanderLP.png"
              alt="GitHub Profile Picture"
              width="200px"
              height="200px"
            />
          </div>
          <div>
            <p>I'm Nander</p>
            <p>I like to code</p>
            <p>
              I like the color <span style={{ color: "var(--primary)" }}>indigo</span>
            </p>
          </div>
        </div>
        {data ? (
          <div className={styles.side}>
            <a href={data.html_url} target="_blank" rel="noreferrer">
              <h2 className={styles.ghTitle}>My GitHub Profile</h2>
            </a>
            <Profile data={data} />
          </div>
        ) : null}
      </main>
    </div>
  );
}
