# Vue Infboard

## Rodando o projeto com Docker

### Passos para rodar o projeto

1. Construa a imagem Docker:

    ```sh
    docker build -t vue-infboard .
    ```

3. Rode o container:

    ```sh
    docker run -p 80:80 vue-infboard
    ```

4. Acesse a aplicação no navegador:

    Abra o navegador e vá para `http://localhost:80`