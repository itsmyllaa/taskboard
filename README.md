https://taskboard-kohl.vercel.app/
Tela atual:
![Captura de Tela 2025-04-19 às 05 48 52](https://github.com/user-attachments/assets/168cec78-9482-4081-bcf7-99ea26ccbd20)

# 📝 Task Board

🎯 Um gerenciador de tarefas simples e eficiente, desenvolvido com **Vite + Tailwind + JavaScript** no frontend e **Spring Boot + H2** no backend. Perfeito para organizar tarefas e acompanhar seu progresso de forma prática!

---

## 💡 Funcionalidades

- ✅ Adicionar tarefas
- 🗑️ Remover tarefas
- 🔁 Integração entre Frontend e Backend
- 💾 Armazenamento em banco H2 em memória

---

## 🛠️ Tecnologias utilizadas

### Frontend
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript Vanilla

### Backend
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Web](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#web)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- Banco de dados [H2](https://www.h2database.com/)

---

## 🚀 Como rodar o projeto localmente

### 🖥️ Backend (Spring Boot)
1. Acesse a pasta do backend:
cd taskboard-backend

Execute o projeto com o Maven ou direto pela sua IDE:
./mvnw spring-boot:run

A API estará disponível em:
http://localhost:8080/api/tasks

🌐 Frontend (Vite + Tailwind + JS)
2.Acesse a pasta do frontend:

cd taskboard-frontend
Instale as dependências:
npm install

Rode o projeto:
npm run dev
A interface estará disponível em:

arduino
http://localhost:5173

🧠 Melhorias futuras
 Editar tarefas
 Marcar tarefas como concluídas
 Adicionar login/autenticação
 Salvar tarefas no banco de dados de forma persistente

👩‍💻 Desenvolvido por
Camila
📍 GitHub: @itsmyllaa

🐞 Encontrou um bug?
Sinta-se à vontade para abrir uma issue ou mandar um pull request! 💌

Antiga tela:
![Captura de Tela 2025-04-18 às 11 43 03](https://github.com/user-attachments/assets/efc70418-0807-4343-92ce-f4b4add5e096)

Antiga tela:
![Captura de Tela 2025-04-08 às 23 56 01](https://github.com/user-attachments/assets/aff2f3dc-f82a-4b09-a83c-36a8467f00ac)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

