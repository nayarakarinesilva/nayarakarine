import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <h1>Contato</h1>

      <section>
        <h2>Entre em Contato</h2>
        <p>
          Estou disponível para novos projetos e oportunidades. Sinta-se à
          vontade para entrar em contato comigo!
        </p>
        <form
          id="contact-form"
          action="https://formspree.io/f/meqyyezp"
          method="POST"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu Nome"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu Email"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Sua Mensagem"
            required
          ></textarea>
          <button type="submit" onclick="sendEmail(event)">
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  );
}
