# aprendendo-typescript

Criei este projeto como um totorial para criar um projeto typescript

Tutorial de configuração de um projeto TS

1 - Inicializar o projeto com Yarn ou NPM

2 - Instalar o Typescript (npm i typescript ou yarn add typescript)

3 - Instalar uma dependência e os tipos dessa dependência (exemplo, yarn add @types/express -> isso instala os tipos da lib express)

3 - Inicializar o arquivo de configuração do TS tsconfig.json com  o comando:

     yarn tsc --init
     
3.1 - Descomentar no arquivo tsconfig.json o parametro " outDir " que receberá o diretório de saída do arquivo transpilado (geralmente em uma pasta chamada dist ou build)
     
4 - Configurar um fluxo de desenvolvimento, no caso usamos o ts-node-dev (instalar como dependencia de desenvolvimento)

4.1 - Criar o escript abaixo no arquivo package.json:
     
     "dev:server" : "ts-node-dev --respawn --transpile-only <seu index.ts>"
     
4.2 - inicializar o projeto com o comando no terminal:
     
     yarn run dev:server

5 - Feito isso o projeto ja está configurado e pronto pra começar a codar, lembrando q é sempre bom evitar o tipo ":any", se necessário criar o tipo.

