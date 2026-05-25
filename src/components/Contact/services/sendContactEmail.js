export const sendContactEmail = async (message) => {
  try {
    const form = new FormData();
    form.append("message", message);

    const response = await fetch("https://formspree.io/f/meqyyezp", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Erro ao enviar a mensagem.");
    }

    // alert("Mensagem enviada com sucesso!");
    return data;
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
};
