import Head from "next/head";
import useSWR from "swr";
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
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <p>I'm Nander I like to code I like the color indigo</p>
        </div>
        <div className={styles.right}>
          <p>{data ? data.followers : "Loading"}</p>
        </div>
      </main>
    </div>
  );
}
