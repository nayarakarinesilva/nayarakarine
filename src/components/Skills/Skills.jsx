import React from "react";
import styles from "./Skills.module.css";
import Images from "../../assets/ImageSkills";

export default function Skills() {
  return (
    <div className={styles.skills}>
      
      <h1>Habilidades</h1>

      <main className={styles.skills_container}>
        <section>
          <h2>Front-end</h2>
          <div>
            <ul>
              <div className={styles.skills_card}>
                <li>
                  <img src={Images.html5} alt="Logo do HTML5" />
                  <span>HTML 5</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.css3} alt="Logo do CSS3" />
                  <span>CSS 3</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.javascript} alt="Logo do JavaScript" />
                  <span>JavaScript</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.typescript} alt="Logo do TypeScript" />
                  <span>TypeScript</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.figma} alt="Logo do Figma" />
                  <span>Figma</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.react} alt="Logo do React" />
                  <span>React</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.vuejs} alt="Logo do VueJs" />
                  <span>Vue.js</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.mui} alt="Logo do Material UI" />
                  <span>Material UI</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.antdesign} alt="Logo do Ant Design" />
                  <span>Ant Design</span>
                </li>
              </div>

            </ul>
          </div>
        </section>

        <section>
          <h2>Back-end e Banco de Dados</h2>
          <div className={styles.skills_container}>
            <ul>
              
              <div className={styles.skills_card}>
                <li>
                  <img src={Images.mysql} alt="Logo do MySql" />
                  <span>MySql</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.postman} alt="Logo do Postman" />
                  <span>Postman</span>
                </li>
              </div>
            </ul>
          </div>
        </section>

        <section>
          <h2>Outras Ferramentas</h2>
          <div className={styles.skills_container}>
            <ul>
              <div className={styles.skills_card}>
                <li>
                  <img src={Images.git} alt="Logo do Git" />
                  <span>Git</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.github} alt="Logo do GitHub" />
                  <span>GitHub</span>
                </li>
              </div>

              <div className={styles.skills_card}>
                <li>
                  <img src={Images.canva} alt="Logo do Canva" />
                  <span>Canva</span>
                </li>
              </div>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
