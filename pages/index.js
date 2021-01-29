import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        dormire cem cwe fjwefnlfklwfennwfeklwefő wel
      </p>
      <p className={styles.text}>
        dormire cem cwe fjwefnlfklwfennwfeklwefő wel
      </p>
      <Link href="./ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
