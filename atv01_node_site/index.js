// index.js : arquivo principal do back-end.
const express = require("express");
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");

// Descomente a linha abaixo se as suas páginas .ejs estiverem na pasta 'pages' em vez de 'views':
// app.set("views", "./pages");

// Configurando a pasta 'public' para arquivos estáticos (CSS, imagens)
app.use(express.static("public"));

// ================= ROTAS DO SITE =================

// 1. ROTA PRINCIPAL (Página Inicial)
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Início - The Beatles",
    paginaAtual: "inicio",
  });
});

// 2. ROTA CATEGORIA 1: INTEGRANTES (5 registos)
app.get("/integrantes", (req, res) => {
  const integrantes = [
    {
      foto: "/images/Integrantes/John Lennon.jpg",
      nome: "John Lennon",
      instrumento: "Guitarra/Vocal",
      nasc: "09/10/1940",
      funcao: "Vocalista e compositor",
    },
    {
      foto: "/images/Integrantes/Paul McCartney.jpg",
      nome: "Paul McCartney",
      instrumento: "Baixo/Vocal",
      nasc: "18/06/1942",
      funcao: "Baixista e compositor",
    },
    {
      foto: "/images/Integrantes/George Harrisson.jpg",
      nome: "George Harrison",
      instrumento: "Guitarra",
      nasc: "25/02/1943",
      funcao: "Guitarrista e compositor",
    },
    {
      foto: "/images/Integrantes/Ringo.jpg",
      nome: "Ringo Starr",
      instrumento: "Bateria/Vocal",
      nasc: "07/07/1940",
      funcao: "Baterista",
    },
  ];

  res.render("integrantes", {
    titulo: "Integrantes - The Beatles",
    paginaAtual: "integrantes",
    integrantes: integrantes,
  });
});

// ROTA CATEGORIA 2: A BANDA / HISTÓRIA
app.get("/banda", (req, res) => {
  const eventos = [
    {
      evento: "Estreia no Cavern Club",
      ano: "1961",
      descricao: "O lendário clube em Liverpool torna-se o berço do grupo, onde realizaram quase 300 apresentações e foram descobertos pelo empresário Brian Epstein.",
      foto: "/images/Banda/cavern-club.jpg"
    },
    {
      evento: "The Ed Sullivan Show",
      ano: "1964",
      descricao: "Apresentação histórica na televisão americana com mais de 73 milhões de espetadores, consolidando a Beatlemania mundial.",
      foto: "/images/banda/ed-sullivan.jpg"
    },
    {
      evento: "Show no Shea Stadium",
      ano: "1965",
      descricao: "O primeiro grande concerto de rock da história realizado num estádio, reunindo mais de 55 mil fãs em Nova Iorque.",
      foto: "/images/Banda/shea-stadium.webp"
    },
    {
      evento: "Início da Era de Estúdio",
      ano: "1966",
      descricao: "Decisão de parar com os shows ao vivo para se dedicarem exclusivamente às inovações de gravação no estúdio Abbey Road.",
      foto: "/images/Banda/era-estudio.jpg"
    },
    {
      evento: "Show no Telhado e Separação",
      ano: "1969-1970",
      descricao: "O Rooftop Concert marca a última apresentação ao vivo da banda, encerrando as atividades logo após o lançamento dos álbuns Abbey Road e Let It Be.",
      foto: "/images/Banda/rooftop.jpg"
    }
  ];

  res.render("banda", {
    titulo: "A Banda - The Beatles",
    paginaAtual: "banda",
    eventos: eventos
  });
});

// ROTA CATEGORIA 4: ÁLBUNS
app.get("/albuns", (req, res) => {
  const albuns = [
    {
      nome: "Please Please Me",
      ano: "1963",
      gravadora: "Parlophone",
      faixas: 14,
      capa: "/images/Albuns/please-please-me.jpg",
      importancia: "Álbum de estreia que deu  inicio a Beatlemania no Reino Unido, gravado praticamente ao vivo num único dia de estúdio."
    },
    {
      nome: "A Hard Day's Night",
      ano: "1964",
      gravadora: "Parlophone",
      faixas: 13,
      capa: "/images/Albuns/hard-days-night.jpg",
      importancia: "Primeiro álbum composto exclusivamente por Lennon e McCartney, servindo de banda sonora para o filme que consolidou a banda na América."
    },
    {
      nome: "Sgt. Pepper's Lonely Hearts Club Band",
      ano: "1967",
      gravadora: "Parlophone",
      faixas: 13,
      capa: "/images/Albuns/sgt-peppers-cover.jpg",
      importancia: "Marco mundial da música psicodélica e dos álbuns conceituais, elevando a música pop ao estatuto de obra de arte e revolução em estúdio."
    },
    {
      nome: "Abbey Road",
      ano: "1969",
      gravadora: "Apple Records",
      faixas: 17,
      capa: "/images/Albuns/abbey-road-cover.jpg",
      importancia: "Última gravação conjunta do grupo em estúdio, famoso pelo seu medley no Lado B e pela capa mais imitada da história da música."
    },
    {
      nome: "Let It Be",
      ano: "1970",
      gravadora: "Apple Records",
      faixas: 12,
      capa: "/images/Albuns/let-it-be.avif",
      importancia: "Álbum de despedida da banda, trazendo hinos imortais como 'Let It Be' e 'Get Back'."
    }
  ];

  res.render("albuns", {
    titulo: "Álbuns - The Beatles",
    paginaAtual: "albuns",
    albuns: albuns
  });
});

// ================= SERVIDOR =================
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
