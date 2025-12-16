# 🎬 Film Frenzy

<p align="center">
  Aplicação web moderna para <strong>descobrir, pesquisar e gerenciar filmes</strong>, com sistema de autenticação e favoritos, utilizando a API do <strong>The Movie Database (TMDb)</strong>.<br/>
  Desenvolvida com <code>React</code>, <code>Vite</code> e <code>JavaScript</code>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React%20Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
  <img src="https://img.shields.io/badge/TMDb-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white"/>
</p>

---

## ✨ FUNCIONALIDADES

- 🎯 Exibição dos filmes mais bem avaliados do TMDb  
- 🔍 Busca de filmes por título  
- 📊 Página de detalhes do filme com:
  - Sinopse  
  - Avaliação  
  - Orçamento e receita  
  - Duração  
  - Data de lançamento  
- ⭐ Sistema de favoritos por usuário  
- 🔐 Autenticação (Login e Cadastro)  
- 🔒 Proteção de rotas privadas  
- 🌐 Interface em Português Brasileiro (PT-BR)  
- 📱 Layout totalmente responsivo  
- ⚡ Alto desempenho com Vite  

---

## 📁 ESTRUTURA DE PASTAS

```bash
filmfrenzy-react/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieCard.css
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movie.jsx
│   │   ├── Movie.css
│   │   ├── Favorites.jsx
│   │   ├── Favorites.css
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Auth.css
│   │   └── Search.jsx
│   ├── routes/
│   │   └── PrivateRoute.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ PRINCIPAIS TECNOLOGIAS UTILIZADAS

- `React 19` — Biblioteca para construção da interface
- `Vite` — Ferramenta de build e servidor de desenvolvimento
- `React Router DOM 7` — Roteamento entre páginas
- `Context API` — Gerenciamento global de autenticação e favoritos
- `React Bootstrap` — Criação de layouts e componentes responsivos
- `React Icons` — Ícones em SVG
- `TMDb API` — Base de dados de filmes
- `LocalStorage` — Persistência de sessão e favoritos
- `ESLint` — Padronização de código
- `CSS3` — Estilização e responsividade

---

## 🔐 AUTENTICAÇÃO E SEGURANÇA

- Sistema de login e cadastro de usuários
- Controle de sessão via Context API
- Rotas privadas protegidas com `PrivateRoute`
- Favoritos associados ao usuário autenticado
- Dados armazenados no LocalStorage
- Variáveis sensíveis protegidas via `.env`

---

## 🚧 DIFICULDADES ENCONTRADAS

Durante o desenvolvimento do projeto, algumas dificuldades foram enfrentadas, contribuindo significativamente para o aprendizado:

- 🔐 Implementação do sistema de autenticação no front-end sem back-end dedicado, utilizando Context API e LocalStorage
- 🔄 Gerenciamento de estado global para controle de sessão do usuário e lista de filmes favoritados
- ⭐ Implementação da funcionalidade de favoritos de forma persistente por usuário
- 🔒 Proteção de rotas privadas, garantindo acesso apenas a usuários autenticados
- 🌐 Consumo e tratamento de dados da API externa do TMDb
- 📊 Organização e exibição adequada das informações na página de detalhes do filme
- 📱 Ajustes de responsividade para diferentes tamanhos de tela, especialmente dispositivos móveis
- 🎨 Integração e customização de componentes do React Bootstrap com CSS personalizado
- 🚀 Configuração de variáveis de ambiente e deploy da aplicação na plataforma Vercel

Esses desafios permitiram aplicar conceitos teóricos na prática e aprimorar a qualidade do projeto

---

## 🧠 APRENDIZADOS

Durante o desenvolvimento do projeto, foram aprofundados conhecimentos em:

- Consumo de APIs REST
- Gerenciamento de estado global
- Autenticação no front-end
- Proteção de rotas
- Organização de projetos React
- Design responsivo
- Deploy com Vercel

---

## 🌍 API UTILIZADA

Este projeto utiliza a API gratuita do The Movie Database (TMDb).

Endpoints utilizados:
- `/movie/top_rated` — Filmes mais bem avaliados.
- `/movie/{id}` — Detalhes do filme.
- `/search/movie` — Busca por título.

📌 Todas as requisições utilizam o idioma `pt-BR`.

---

## 🌐 Projeto Online

<p>
  🔗 <a href="https://filmfrenzy-react-6yb3.vercel.app/" target="_blank"><strong>Acesse o projeto aqui</strong></a>
</p>

***

## COMO RODAR LOCALMENTE

1. Clone o repositório:

```bash
git clone https://github.com/Iago-Ferreira-Silva/filmfrenzy-react.git
cd filmfrenzy-react
```

2. Instale dependências:

```bash
npm install
```

3. Configure o arquivo `.env`:

```bash
VITE_API_KEY=api_key=SUA_CHAVE_TMDB
VITE_API=https://api.themoviedb.org/3/movie/
VITE_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_IMG=https://image.tmdb.org/t/p/w500/
```

4. Execute o projeto:

```bash
npm run dev
```
A aplicação abrirá em:
```bash
http://localhost:5173
```

5. Build de produção:

```bash
npm run build
```

6. Visualizar a build:

```bash
npm run preview
```

***

## 🔐 SEGURANÇA

- A chave da API do TMDb é armazenada no arquivo `.env`.
- O arquivo `.env` está no `.gitignore`.
- Nenhuma credencial sensível é versionada no repositório.

---

## 👤 AUTORES

- [Iago Ferreira Silva](https://github.com/Iago-Ferreira-Silva)
- [Mikael Pereira da Silva](https://github.com/Mikaelpereiradasilva)
- [Jorge Felipe](https://github.com/jorgefelipe2)


---

## 📌 STATUS DO PROJETO:
![Badge Concluído](https://img.shields.io/static/v1?label=STATUS&message=CONCLU%C3%8DDO&color=brightgreen&style=for-the-badge)

---