import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.bottom}>
      <p>The Romanian Academy. Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
