# 🎬 Film Frenzy

<p align="center">
  Aplicação web moderna para <strong>descobrir, pesquisar e explorar filmes</strong> com informações detalhadas, utilizando a API do <strong>The Movie Database (TMDb)</strong>.<br/>
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
- 📊 Página de detalhes com:
  - Sinopse  
  - Avaliação  
  - Orçamento e receita  
  - Duração  
  - Data de lançamento  
- 🌐 Interface em Português Brasileiro (PT-BR)  
- 📱 Layout totalmente responsivo com React Bootstrap  
- ⚡ Alto desempenho com Vite  

---

## 📁 ESTRUTURA DE PASTAS

```bash
filmfrenzy-react/
├── public/
│   └── film.svg
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movie.jsx
│   │   ├── Movie.css
│   │   ├── Search.jsx
│   │   └── MoviesGrid.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── eslint.config.js
├── vite.config.js
├── index.html
├── package.json
└── README.md
```

---

## 🛠️ PRINCIPAIS TECNOLOGIAS UTILIZADAS

- `React 19` — Biblioteca para construção da interface.
- `Vite` — Ferramenta de build e servidor de desenvolvimento.
- `React Router DOM 7` — Roteamento entre páginas.
- `React Bootstrap` — Criação de layouts e componentes responsivos.
- `React Icons` — Ícones em SVG.
- `TMDb API` — Base de dados de filmes.
- `ESLint` — Padronização de código.
- `CSS3` — Estilização e responsividade.

---

## 🚧 DIFICULDADES ENCONTRADAS

- 🔐 Configuração segura das variáveis de ambiente.
- 🔄 Consumo e tratamento dos dados da API externa.
- 📊 Organização das informações exibidas na página de detalhes.
- 📱 Ajustes de layout para múltiplos tamanhos de tela.
- 🎨 Adaptação do layout para componentes do React Bootstrap.

---

## 🧠 APRENDIZADOS

Durante o desenvolvimento, foram aprofundados conhecimentos em:

- Integração com APIs REST.
- Gerenciamento de rotas com React Router.
- Organização de componentes e páginas.
- Uso de variáveis de ambiente no Vite.
- Construção de interfaces responsivas.
- Utilização prática do React Bootstrap em projetos reais.

---

## 🌍 API UTILIZADA

Este projeto utiliza a API gratuita do The Movie Database (TMDb).

Endpoints utilizados:
- `/movie/top_rated` — Filmes mais bem avaliados.
- `/movie/{id}` — Detalhes do filme.
- `/search/movie` — Busca por título.

📌 Todas as requisições utilizam o idioma `pt-BR`.

---

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

---

## 📌 STATUS DO PROJETO:
![Badge Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge)

---