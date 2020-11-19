import styles from "../../styles/Profile.module.scss";

export default function Profile(props) {
  const { data } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.data}>
        <p className={styles.text}>Followers: {data.followers}</p>
        <p className={styles.text}>Repos: {data.public_repos}</p>
      </div>
    </div>
  );
}
