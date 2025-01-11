import styles from "./Experiences.module.css";

function Experiences() {
  return (
    <div className={styles.experiences_container}>
      <h1>Experiências</h1>

      <section>
        <div>
          <h2>Experiência Profissional</h2>
          <ul>
            <li>
              <strong>ProBrain</strong>, Sorocaba - SP –{" "}
              <em>Estágio em Front-End</em> –{" "}
              <span>Outubro de 2024 – Atual</span>
            </li>

            <li>
              <strong>AgBe Soluções LTDA</strong>, Campinas - SP –{" "}
              <em>Estágio em Full Stack</em> –{" "}
              <span>Abril de 2024 – Setembro de 2024</span>
            </li>

            <li>
              <strong>Ritnner Odontologia</strong>, Campinas – SP –{" "}
              <em>Auxiliar de Saúde Bucal</em> –{" "}
              <span>Maio de 2022 – Março de 2024</span>
            </li>

            <li>
              <strong>We Smile</strong>, Campinas – SP –{" "}
              <em>Auxiliar de Saúde Bucal</em> –{" "}
              <span>Março de 2021 – Abril de 2022</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Atividades Extracurriculares</h2>
          <ul>
            <li>
              <strong>JavaScript / HTML5 / CSS3 / Java</strong> – Curso em Vídeo
              – <em>Agosto 2023</em>
            </li>

            <li>
              <strong>Bootcamp Elas Tech BACKEND</strong> – Java, MySQL –{" "}
              <em>Março 2024</em>
            </li>

            <li>
              <strong>Programa Desenvolvedor FRONTEND</strong> – ONE (Oracle
              Next Education) com Alura – <em>Fevereiro 2024</em>
            </li>

            <li>
              <strong>JavaScript / TypeScript / React.js / Figma</strong> –
              Origamid – <em>2024</em>
            </li>

            <li>
              <strong>Figma</strong> – Sujeito Programador – <em>2024</em>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Experiences;
