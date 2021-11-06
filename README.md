# Descrição

  - Case técnico com o objetivo de postar textos livres
  - Esses textos podem ser votados utilizando upvotes.

## Como rodar

  - Inicialmente clone o projeto com o comando :
  - --> git remote add origin git@github.com:IsleneGomes/Posts.git

  - Em seguida execute os comandos a seguir:
  - --> npm install
  - --> npm start

### O Projeto

- O Projeto inicia numa tela de login, sem autenticação
- Ao fazer o login o state da aplicação inicia a guarda de informações, o que pode ser observado na tela principal, onde o nome do login é usado nas saudações
- Para criar um post, teremos o botão Novo Post no header
- O componente que torna possível inserir um novo post dará ao usuário um preview de como o post ficará
- Ao clicar em Publicar o post será renderizado na tela principal

### A API

- Inicialmente o case técnico seria consumido pela API [https://segware-book-api.segware.io/api/docs/#/], porém a conexão com essa API ainda está em desenvolvimento

### Tecnologias

- A Aplicação foi desenvolvida em JavaScript utilizando ReactJS
- Utilizamos a biblioteca Material.ui para criar os componentes

### Testes

- npm run test
- Os testes ainda estão sendo implementados à medida que estudo a documentação

### Próximos Passos - (em desenvolvimento)

- Desenvolver o contador de upvotes
- Conectar com a API, ou desenvolver uma API no back com Node JS
- Trabalhar na validação da tela de login
- Conectar email com dados do Google para renderizar o Avatar do usuário
