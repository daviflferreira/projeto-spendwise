# SpendWise

Aplicação Full Stack para controle de gastos pessoais.

## Sobre o projeto

O SpendWise está sendo para ajudar usuários a registrarem e acompanharem seus gastos do dia a dia.

O objetivo é permitir uma visão clara de para onde o dinheiro está indo ao longo do mês.

## Tecnologias utilizadas que serão

### Frontend

* React
* JavaScript
* Vite

### Backend

* Python
* FastAPI

### Banco de Dados

* SQLite

## Funcionalidades

* Cadastro de gastos
* Listagem de despesas
* Remoção de gastos
* Filtro por categoria
* Total gasto no mês

## Estrutura do projeto

```
spendwise/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   └── schemas.py
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── App.jsx
```

## Como rodar o projeto

### Backend

```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

A API estará disponível em [http://localhost:8000](http://localhost:8000)

Documentação automática em [http://localhost:8000/docs](http://localhost:8000/docs)

### Frontend

```
cd frontend
npm install
npm run dev
```

O frontend estará disponível em [http://localhost:5173](http://localhost:5173)

## Integração

O frontend se comunica com o backend por meio de requisições HTTP utilizando JSON.

## Próximas melhorias

* Gráficos de gastos
* Filtro por período
* Sistema de autenticação
* Deploy em produção

## Autor

Davi Ferreira Lacerda Baliza

## Licença

MIT