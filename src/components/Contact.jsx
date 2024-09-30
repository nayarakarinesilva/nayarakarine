import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailMessage = `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`;
    
    sendEmail(emailMessage);
    clearFormFields();
  };
  
  const sendEmail = (message) => {  // Ajuste aqui
    const form = new FormData();
    form.append("message", message);
  
    fetch("https://formspree.io/f/meqyyezp", {
      method: "POST",
      body: form,
    })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(data => {
          throw new Error(data.error || "Erro ao enviar a mensagem.");
        });
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Mensagem enviada com sucesso!");
    });
  };
  
  const clearFormFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.contact_container}>
      <h1>Contato</h1>

      <section>
        <h2>Entre em Contato</h2>
        <p>
          Estou disponível para novos projetos e oportunidades. Sinta-se à
          vontade para entrar em contato comigo!
        </p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu Nome"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu Email"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Sua Mensagem"
            required
          ></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>
    </div>
  );
}
