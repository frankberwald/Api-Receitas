# API de Receitas

Este projeto é um template pré-configurado utilizando TypeORM, Express, CORS, bcrypt e JSON Web Token (JWT). Ele serve como ponto de partida para o desenvolvimento de APIs que necessitam de autenticação e gerenciamento de dados relacionais.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Express**: Framework web para Node.js, facilitando a construção de APIs robustas.
- **TypeORM**: ORM (Object-Relational Mapping) que simplifica a interação com bancos de dados relacionais.
- **CORS**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.
- **bcrypt**: Biblioteca para hash de senhas, garantindo a segurança dos dados dos usuários.
- **jsonwebtoken**: Implementação de JSON Web Tokens para autenticação segura.

## Funcionalidades Implementadas

### 1. Autenticação com JWT

- Proteção de rotas através de tokens JWT, garantindo acesso seguro a usuários autenticados.

### 2. Cadastro e Login de Usuários

- **Cadastro**: Usuários podem se registrar na API.
- **Login**: Geração de token JWT para acesso autenticado.

### 3. CRUD de Receitas

- **Criação**: Usuários podem adicionar novas receitas.
- **Leitura**: Listagem de receitas cadastradas.
- **Atualização**: Permite edição de receitas existentes.
- **Deleção**: Remoção de receitas cadastradas.

## Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/frankberwald/Api-Receitas.git
   ```

2. **Instale as dependências**:

   ```bash
   cd Api-Receitas
   npm install
   ```

3. **Configure as variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=seu_usuario
   DATABASE_PASSWORD=sua_senha
   DATABASE_NAME=nome_do_banco
   JWT_SECRET=sua_chave_secreta
   ```

4. **Execute as migrações do banco de dados**:

   ```bash
   npm run typeorm migration:run
   ```

5. **Inicie o servidor**:

   ```bash
   npm run dev
   ```

   O servidor estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

