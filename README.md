# 🌐 Portfólio Pessoal - Nayara Karine

Este é meu portfólio pessoal desenvolvido com **React**, onde apresento meus projetos, habilidades e experiências. A aplicação foi refatorada para utilizar **Material UI (MUI)**, possui suporte a **tema claro e escuro**, design responsivo e uma estrutura modularizada para facilitar a manutenção e evolução do código.

## ✨ Funcionalidades

- Apresentação pessoal e experiências
- Lista de projetos com links e repositórios
- Sessão de habilidades técnicas
- Seção de contato com validação de formulário
- Alternância entre tema claro e escuro
- Design responsivo para diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

- **React.js** – Estrutura da aplicação
- **Material UI (MUI)** – Componentes, layout responsivo e estilização
- **JavaScript (ES6+)**
- **Context API** – Gerenciamento global de estado e tema
- **JSON** – Armazenamento dos dados dos projetos e habilidades
- **Material Icons** – Ícones da interface
- **Git & GitHub** – Controle de versão
- **Vercel** – Deploy da aplicação

## 📁 Estrutura do Projeto

```bash
├── public/
│   └── ...
├── src/
│   ├── assets/
│   │   ├── imagePerfil/
│   │   ├── imageSkills/
│   │   ├── imageNetwork/
│   │   ├── imageWork/
│   │   ├── imageSkills/
│   │   └── logo.svg
│   │
│   ├── components/
│   │   ├── About/
│   │   │   └── About.jsx
│   │   │
│   │   ├── Contact/
│   │   │   ├── components/
│   │   │   │   ├── ContactForm.jsx
│   │   │   │   ├── ContactInfo.jsx
│   │   │   │   └── ContactInfoItem.jsx
│   │   │   ├── data/
│   │   │   │   └── contactData.js
│   │   │   ├── hooks/
│   │   │   │   └── useContactForm.js
│   │   │   ├── services/
│   │   │   │   └── sendContactEmail.js
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── Experiences/
│   │   │   ├── data/
│   │   │   │   └── experiencesData.js
│   │   │   └── Experiences.jsx
│   │   │
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── Navbar/
│   │   │   ├── components/
│   │   │   │   ├── NavbarMenu.jsx
│   │   │   │   └── NavbarMobileMenu.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── Projects/
│   │   │   ├── components/
│   │   │   │   └── ProjectsSections.jsx
│   │   │   ├── data/
│   │   │   │   └── projectsData.json
│   │   │   └── Projects.jsx
│   │   │
│   │   └── Skills/
│   │       ├── constants/
│   │       │   └── Skills.js
│   │       ├── ui/
│   │       │   ├── CardSkill.jsx
│   │       │   └── CardSkillInfo.jsx
│   │       └── Skills.jsx
│   │
│   ├── context/
│   │   └── GlobalContext.jsx
│   │
│   ├── ui/
│   │   ├── CustomButton/
│   │   ├── Input/
│   │   ├── TextArea/
│   │   └── Title/
│   │
│   ├── App.jsx
│   ├── App.module.css
│   └── index.jsx
│
├── .eslintrc.json
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 🌐 Acesse o Projeto Online

🔗 https://nayarakarine.vercel.app/
