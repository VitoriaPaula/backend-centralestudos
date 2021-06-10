
# Central de Estudos

Semester project named Central de Estudos from 7º semester students at São Judas Tadeu University.

The advertising animation - https://youtu.be/U1jLUq0ghvk

The slide apresentation - https://bit.ly/3ivd6VZ

## Authors

- [Eduardo Baloti](https://github.com/eduardobaloti)
- [Gustavo Fiacador](https://github.com/GustavoFiacador)
- [Leonardo Rossini](https://github.com/RossiniLeo)
- [Luis Felipe](https://github.com/Luis-Perf)
- [Marcio Amorosino](https://github.com/Marccio)
- [Vitoria Nunes](https://github.com/VitoriaPaula)
- [Vitoria Salata](https://github.com/vitsaojudas)

  
## Tech Stack

**Frontend:** Angular

**Backend:** [Node.js](https://nodejs.org/en/download/)

  
## Run Locally
It is required to download Node.js

Clone the project

```bash
  git clone https://github.com/VitoriaPaula/centralestudos.git
```

Go to the project directory

```bash
  cd centralestudos
```

### Backend

Go to the backend directory

```bash
  cd backend\API
```

Install yarn

```bash
  npm install yarn
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

Now is running in this url: http://localhost:3333/

### Frontend
Go to the frontend directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
Now is running in this url: http://localhost:4200/
  
## API Reference

#### Get all courses

```http
  GET /cursos
```

#### Get filtered courses

```http
  GET /cursos/filtro
```
With a json body with the following: 

|  Parameter  | Type     | Description                             |
| :---------- | :------- | :-------------------------------------- |
| `CATEGORIA` | `string` |   **Optional**. Your chosen category    |
| `LINGUAGEM` | `string` | **Optional**. Your chosen code language |
|    `SITE`   | `string` |      **Optional**. Your chosen site     |


  