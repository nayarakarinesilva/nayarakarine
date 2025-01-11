import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer_container}>
      <p>
        &copy; {currentYear} Desenvolvido por <a href="">Nayara Karine</a>
      </p>
    </div>
  );
}

export default Footer;
