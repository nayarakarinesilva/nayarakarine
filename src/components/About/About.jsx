import styles from "./About.module.css";
import Image from "../../assets/imagePerfil/foto-nayara-moldura-redonda-png.png";
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

        <div>
          <section>
            <img src={Image} alt="Foto da Nayara Karine" />
          </section>
          <section className={styles.about_container_links}>
            <h2>Acesse minhas redes:</h2>
            <div className={styles.linkContainer}>
              <div className={styles.link}>
                <a href="https://github.com/nayarakarinearaujo" aria-label="GitHub" target="blanck">
                  <i className="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
              </div>
              <div className={styles.link}>
                <a href="https://www.linkedin.com/in/nayarakarine-araujo/" aria-label="LinkedIn" target="blanck">
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className={styles.link}>
                <a href="https://www.instagram.com/nayarakarine.araujo/" aria-label="Instagram" target="blanck">
                  <i className="bi bi-instagram"></i>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

