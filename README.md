# Projeto de Laboratório de Programação Web (MATC84) 2023.1

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) v. 16.0.2. Este é um guia passo a passo para ajudar você a instalar o Node.js e o Angular v16 em seu sistema e executar o projeto Angular localmente. 

------

## Instalação do Node.js e Angular v16.0.2 & Execução do prjeto

<details>
  <summary>Instalação do Node.js</summary>

  O Node.js é um ambiente de tempo de execução JavaScript que permite executar código JavaScript no lado do servidor. O Angular é construído sobre o Node.js, portanto, é necessário instalá-lo antes de prosseguir com a instalação do Angular.

  Siga as etapas abaixo para instalar o Node.js:

  1. Acesse o site oficial do Node.js em [nodejs.org](https://nodejs.org/).

  2. Na página inicial do Node.js, você encontrará o botão de download. Clique nele para baixar o instalador adequado para o seu sistema operacional.

  3. Após o download ser concluído, execute o instalador.

  4. Siga as instruções do assistente de instalação. Você pode aceitar as configurações padrão ou personalizá-las conforme necessário.

  5. Após a instalação, abra o terminal ou prompt de comando e digite o seguinte comando para verificar se o Node.js foi instalado corretamente:

  ```
  node -v
  ```

  Isso exibirá a versão instalada do Node.js.

  Agora que você tem o Node.js instalado, podemos prosseguir com a instalação do Angular v16.
</details>

<details>
  <summary>Instalação do Angular v16.0.2</summary>
  O Angular é uma estrutura de desenvolvimento de aplicativos da web que permite criar aplicativos ricos e interativos. O Angular CLI (Interface de Linha de Comando) facilita a criação e a execução de projetos Angular.

  Siga as etapas abaixo para instalar o Angular v16:

  1. Abra o terminal ou prompt de comando.

  2. Execute o seguinte comando para instalar o Angular CLI globalmente:

  ```
  npm install -g @angular/cli@16.0.2
  ```

  Isso instalará a versão 16 do Angular CLI em seu sistema.

  3. Após a conclusão da instalação, você pode verificar se o Angular CLI foi instalado corretamente executando o seguinte comando:

  ```
  ng version
  ```

  Isso exibirá a versão instalada do Angular CLI.

  Agora que você tem o Node.js e o Angular v16 instalados, podemos prosseguir para a execução de um projeto Angular localmente.
</details>

## Executando um projeto Angular localmente

Siga as etapas abaixo para executar um projeto Angular localmente:

1. Abra o terminal ou prompt de comando.

2. Navegue até o diretório do projeto Angular usando o comando `cd`. Por exemplo:

   ```
   cd caminho/para/o/projeto
   ```

3. No diretório do projeto, instale as dependências executando o seguinte comando:

   ```
   npm install
   ```

   Isso instalará todas as dependências necessárias definidas no arquivo `package.json` do projeto.

4. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

   ```
   ng serve
   ```

   Isso compilará o projeto e iniciará o servidor de desenvolvimento.

5. Abra o navegador e visite o seguinte URL:

   ```
   http://localhost:4200
   ```

   O projeto Angular será carregado
## Contribuindo com o projeto

Agradecemos seu interesse em contribuir com nosso projeto! Existem várias maneiras pelas quais você pode contribuir, desde a assinatura de issues até o envio de pull requests. Veja abaixo como você pode começar:

### Assinando uma Issue

1. Navegue até a seção de issues do nosso projeto no repositório no GitHub.

2. Analise as issues abertas e encontre uma que você gostaria de trabalhar.

3. Comente na issue informando que você gostaria de assumi-la.

### Realizando um Fork e enviando um Pull Request

Se você deseja contribuir com uma nova funcionalidade ou corrigir um bug existente, recomendamos seguir o fluxo de trabalho a seguir:

1. Faça um Fork do nosso repositório clicando no botão "Fork" na página do repositório no GitHub. Isso criará uma cópia do repositório em sua conta pessoal.

2. Clone o repositório forkado para o seu ambiente de desenvolvimento local:

   ```
   git clone https://github.com/SEU_USUARIO/SEU_FORK.git
   ```

3. Crie uma nova branch para trabalhar na sua contribuição:

   ```
   git checkout -b nome-da-sua-branch
   ```

4. Realize as alterações necessárias no código, adicionando novas funcionalidades ou corrigindo bugs.

5. Após concluir suas alterações, faça commit das mudanças:

   ```
   git add .
   git commit -m "Descrição das alterações realizadas"
   ```

6. Faça o push das suas alterações para o repositório forkado:

   ```
   git push origin nome-da-sua-branch
   ```

7. Navegue até o repositório forkado no GitHub e clique no botão "New Pull Request" (Novo Pull Request).

8. Preencha o formulário do Pull Request, fornecendo informações detalhadas sobre suas alterações.

9. Aguarde o feedback e discussões sobre o seu Pull Request. Se necessário, faça as alterações solicitadas.

10. Uma vez que seu Pull Request seja aprovado, ele será mesclado (merged) ao repositório principal e suas alterações farão parte do projeto.

Lembre-se de manter seu fork atualizado com as últimas alterações do repositório principal, realizando sincronizações regulares antes de criar um novo Pull Request. Isso evita conflitos e ajuda a garantir que suas contribuições sejam baseadas na versão mais recente do projeto.
