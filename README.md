# aprendendo-typescript

Criei este projeto como um totorial para criar um projeto typescript

Tutorial de configuração de um projeto TS

1 - Inicializar o projeto com Yarn ou NPM:

     yarn init -y
     npm init -y

2 - Instalar o Typescript:

     yarn add typescript
     npm i typescript
     
3 - Inicializar o arquivo de configuração do TS tsconfig.json com  o comando:

     yarn tsc --init
     
*Esta etapa serve para podermos usar o export default nos modulos TS.*

4 - Instalar uma dependência e os tipos dessa dependência (exemplo, yarn add @types/express -> isso instala os tipos da lib express)

     yarn add @types/<some-library>
     npm i @types/<some-library>

     
4.1 - Descomentar no arquivo tsconfig.json o parametro **outDir** que receberá o diretório de saída do arquivo transpilado (geralmente em uma pasta chamada dist ou build)

     "outDir": "./dist"
     
5 - Configurar um fluxo de desenvolvimento, no caso usamos o ts-node-dev (instalar como dependencia de desenvolvimento)

     yarn add ts-node-dev -D
     npm i ts-node-dev -D

5.1 - Criar o escript abaixo no arquivo package.json:
     
     "scripts": {
          "dev:server" : "ts-node-dev --respawn --transpile-only <your-index.ts>"
     }
     
5.2 - inicializar o projeto com o comando no terminal:
     
     yarn run dev:server

6 - Feito isso o projeto ja está configurado e pronto pra começar a codar, lembrando q é sempre bom evitar o tipo **:any**, se necessário criar o tipo.

