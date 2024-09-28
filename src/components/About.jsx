import styles from "./About.module.css";
import Image from "./foto-nayara-moldura-redonda-png.png";
import ImageNetwork from "../assets/ImageNetwork";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function About() {
  return (
    <div className={styles.about_container}>
      <main>
        <section>
          <h1>
            Eleve seu negócio digital a outro nível{" "}
            <strong>com uma Desenvolvedora Full Stack de qualidade!</strong>
          </h1>
          <p>
            Olá! Sou Nayara Karine, desenvolvedora Full Stack especializada em
            JavaScript, HTML, CSS e Java. Crio landing pages impactantes que
            ajudam pequenos negócios e designers a transformar boas ideias em
            realidade digital, além de trabalhar com soluções backend robustas
            em Java. Vamos conversar sobre como podemos dar vida ao seu próximo
            projeto?
          </p>
        </section>

        <section>
          <img src={Image} alt="Foto da Nayara Karine" />
        </section>

        <section className={styles.about_container_links}>
  <h2>Acesse minhas redes:</h2>

  <div className={styles.link}>
    <a href="" aria-label="GitHub">
      <i className="bi bi-github"></i>
    </a>
    <span>GitHub</span>
  </div>

  <div className={styles.link}>
    <a href="" aria-label="LinkedIn">
      <i className="bi bi-linkedin"></i>
    </a>
    <span>LinkedIn</span>
  </div>

  <div className={styles.link}>
    <a href="" aria-label="Instagram">
      <i className="bi bi-instagram"></i>
    </a>
    <span>Instagram</span>
  </div>
</section>







      </main>
    </div>
  );
}
