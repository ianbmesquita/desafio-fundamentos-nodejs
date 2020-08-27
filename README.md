<img alt="GoStack" src=".github/banner-gostack.png" />

<h1 align="center">
    Desafio Fundamentos do Node.js
</h1>

## :rocket: Tecnologias

<p float="left">
  <img alt="TypeScript" src=".github/typescript.svg"/>
  <img alt="NodeJS" src=".github/node.svg" hspace="10"/>
</p>

-  [TypeScript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)

# :wrench: Ferramentas Utilizadas

- **express** - Framework de aplicações web para o Node.js que controla as rotas das requisições.
- **uuidv4** - Identificador único universal para a geração de ids das entidades.

## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado.
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado.
  - É **necessário** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - É **necessário** ter um client de requisições REST como o **[Insomnia](https://insomnia.rest/)** ou **[Postman](https://www.postman.com/)**.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/ianbmesquita/desafio-fundamentos-nodejs.git
```

2. Executando a Aplicação:

```sh
  # Acessando o diretório da API.
  $ cd desafio-fundamentos-nodejs

  # Instalando as dependências do projeto.
  $ yarn # ou npm install

  # Inicializando o servidor node.
  $ yarn dev:server	
```

3. Com um client de requisições REST como o Insomnia ou o Postman, acessar as rotas disponibilizadas na API.

 - Cadastrar um novo repositório. <br />
   **POST** http://localhost:3333/transactions

Request Body (Exemplo):
```
   {
	"title": "Salário",
	"value": 5000.00,
	"type": "income"
   }
```

 - Listar todos os repositórios. <br />
   **GET** http://localhost:3333/transactions

## :heavy_check_mark: Testes

Para verificar se a aplicação passa em todos os testes é necessário rodar o comando abaixo na raiz do projeto:
```
$ yarn test
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
<sup>Projeto desenvolvido com a tutoria de [Diego Fernandes](https://github.com/diego3g), da [Rocketseat](rocketseat.com.br).</sup>
