# aprendendo-typescript

Criei este projeto como um totorial para criar um projeto typescript

Tutorial de configuração de um projeto TS

1 - Inicializar o projeto com Yarn ou NPM

2 - Instalar o Typescript (npm i typescript ou yarn add typescript)

3 - Instalar uma dependência e os tipos dessa dependência (exemplo, yarn add @types/express -> isso instala os tipos da lib express)

3 - Inicializar o arquivo de configuração do TS com "yarn tsc --init", que gerará o arquivo tsconfig.json

     3.1 - Descomentar no arquivo tsconfig.json o parametro "outDir" que receberá o diretório de saída do arquivo transpilado (geralmente em uma pasta chamada dist ou build)
     
4 - Configurar um fluxo de desenvolvimento, no caso usamos o ts-node-dev (instalar como dependencia de desenvolvimento)

     4.1 - criar um script para rodar esse fluxo de desenvolvimento, " "dev:server" : "ts-node-dev --respawn --transpile-only <seu index.ts>" "\n
     4.2 - inicializar com "yarn run dev:server" no terminal\n

5 - Feito isso o projeto ja está configurado e pronto pra começar a codar, lembrando q é sempre bom evitar o tipo ":any", se necessário criar o tipo.

