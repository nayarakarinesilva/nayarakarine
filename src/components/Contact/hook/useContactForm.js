import { useState } from "react";
import { sendContactEmail } from "../services/sendContactEmail";

export const useContactForm = () => {
  const [touched, setTouched] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validator = {
    name: (value) => value && value.length >= 3,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value?.toLowerCase()),
    subject: (value) => value?.trim().length >= 5,
    message: (value) => value?.trim().length >= 8,
  };

  const errors = {
    name: !validator.name(form.name),
    email: !validator.email(form.email),
    subject: !validator.subject(form.subject),
    message: !validator.message(form.message),
  };

  const errorMessages = {
    name: "Nome precisa ter pelo menos 3 caracteres",
    email: "E-mail inválido",
    subject: "Assunto precisa ter pelo menos 5 caracteres",
    message: "Mensagem precisa ter pelo menos 8 caracteres",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const hasErrors =
      errors.name || errors.email || errors.subject || errors.message;

    const emailMessage = `
        Nome: ${form.name}\n
        E-mail: ${form.email}\n
        Assunto: ${form.subject}\n
        Mensagem: ${form.message}
    `;

    const newTouched = {
      name: true,
      email: true,
      subject: true,
      message: true,
    };

    setTouched(newTouched);

    if (hasErrors) return;

    try {
      await sendContactEmail(emailMessage);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTouched({});
      setIsMessageSent(true);

      setTimeout(() => {
        setIsMessageSent(false);
      }, 3000);
      
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleChange,
    form,
    handleSubmit,
    errorMessages,
    errors,
    setTouched,
    touched,
    isMessageSent,
  };
};
