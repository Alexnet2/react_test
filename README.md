#### Projeto Fullstack

* Inciando projeto
  * web
    ```
    cd web && yarn dev => Inicia o projeto no modo desenvolvimento
    ```
  * api
     ```
    cd api && yarn dev => Inicia o projeto no modo desenvolvimento
    ```
   * database
        ```
        docker-compose up -d => na pasta raiz do projeto
        ```

* Arquivos de configurações
  
No arquivo **.env.example** contém as variáveis necessárias para conexão com database.

**No arquivo web/src/config/index.ts colocar a porta que a API rodará**
