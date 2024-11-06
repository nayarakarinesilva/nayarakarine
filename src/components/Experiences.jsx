import styles from "./Experiences.module.css";

function Experiences() {
  return (
    <div className={styles.experiences_container}>
      <h1>Experiencias</h1>

      <section>
        <div>
          <h2>EXPERIÊNCIA PROFISSIONAL</h2>
          <ul>
          <li>
              ProBrain, Sorocaba -SP – Estágio em Front-End - OUTUBRO DE 2024 – ATUAL.
            </li>
            <li>
              AgBe Soluções LTDA, Campinas -SP – Estágio em Full Stack - ABRIL DE 2024 – SETEMBRO DE 2024.
            </li>
            <li>
              Ritnner Odontologia, Campinas – SP - Auxiliar de Saúde Bucal MAIO
              DE 2022 – MARÇO DE 2024.
            </li>
            <li>
              We Smile, Campinas – SP - Auxiliar de Saúde Bucal MARÇO DE 2021 -
              ABRIL DE 2022.
            </li>
          </ul>
        </div>
         <div>
          <h2>ATIVIDADES EXTRACURRICULARES</h2>
          <ul>
            <li>
              Curso: JavaScriFt / HTML5/ CSS3/ Java – Curso em Vídeo – AGOSTO
              2023.
            </li>

            <li> Bootcamp Elas Tech BACKEND - JAVA, MySql, MARÇO 2024.</li>

            <li>
              Programa Desenvolvedor FRONTEND / ONE (Oracle Next Education) com
              ALURA, FEVEREIRO 2024.
            </li>

            <li>Curso Fron-End - Origamid - 2024</li>

            <li>Curso React.Js - Origamid - 2024</li>

            <li>Curso Figma - Origamid - 2024</li>

            <li>Curso Figma - Sujeito Programador - 2024</li>
          </ul>
        </div> 
      </section>
    </div>
  );
}

export default Experiences;
