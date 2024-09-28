import styles from "./About.module.css";
import Image from "./foto-nayara-moldura-redonda-png.png";

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
      </main>
    </div>
  );
}
