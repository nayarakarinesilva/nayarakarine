import styles from "./About.module.css";
import Image from "../../assets/imagePerfil/foto-nayara-moldura-redonda-png.png";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <main>
        <section>
          <h1>
            Eleve seu negócio digital a outro nível{" "}
            <strong>com uma Desenvolvedora Front-end de qualidade!</strong>
          </h1>
          <p>
            Olá! Sou Nayara Karine, desenvolvedora Front-end apaixonada por
            criar interfaces intuitivas e acessíveis. Tenho experiência com
            JavaScript, HTML, CSS e estou aprofundando meus conhecimentos em UX
            para entregar soluções que encantam usuários e geram resultados para
            seu negócio. Vamos transformar suas ideias em experiências digitais
            incríveis?
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
                <a
                  href="https://github.com/nayarakarinesilva"
                  aria-label="GitHub"
                  target="blanck"
                >
                  <i className="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
              </div>
              <div className={styles.link}>
                <a
                  href="https://www.linkedin.com/in/nayarakarine-silva/"
                  aria-label="LinkedIn"
                  target="blanck"
                >
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className={styles.link}>
                <a
                  href="https://www.instagram.com/nayarakarine.silva/"
                  aria-label="Instagram"
                  target="blanck"
                >
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
