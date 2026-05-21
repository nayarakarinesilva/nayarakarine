

export const sendContactEmail = (message) => {
  // Ajuste aqui
  const form = new FormData();
  form.append("message", message);

  fetch("https://formspree.io/f/meqyyezp", {
    method: "POST",
    body: form,
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.error || "Erro ao enviar a mensagem.");
        });
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Mensagem enviada com sucesso!");
    });
};
