# Weather Forecast

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.0.10.

## Servidor de desenvolvimento

Execute `ng serve` para iniciar um servido de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você modificar qualquer um dos arquivos de origem.

## Descrição do seu projeto

Este projeto em Angular utiliza a biblioteca PrimeNG para criar uma interface para o usuário consultar a previsão do tempo da localicade de sua escolha.

## Funcionalidades

Os principais elementos que estão compostos no projeto são:

Barra de pesquisa: Um campo de texto para que o usuário possa digitar a localidade que ele deseja consultar a previsão do tempo

Botão para pesquisa: um bootão de pesquisa que pode ser clicado ou acionado pressionando a tecla "enter".

Exibição do tempo: Após o botão ser acionando a resposta da API é exibida na interface, as seguintes informações irão aparecer na tela:

Nome da cidade, temperatura, descrição do clima, sensação térmica, velocidade do vento e humidade.

Erro: caso ocorra algum erro na busca pela localidade, uma mensagem de erro é exibida na tela.

## Como Executar

Para rodar o projeto localmente, siga as instruções abaixo:

Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.
Clone este repositório: git clone https://github.com/Andrei-Rodrigues/desafio1_angular_primeng
Navegue até o diretório do projeto: cd weather_forecast
Instale as dependências: npm install
Inicie o servidor de desenvolvimento: ng serve --open
Abra seu navegador e acesse http://localhost:4200/
