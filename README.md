# Next.js + FastAPI

Estrutura fullstack com:
- `frontend/`: Next.js (TypeScript, App Router)
- `backend/`: FastAPI

## Backend em Clean Architecture
- `backend/app/domain`: entidades e portas (regras de dominio)
- `backend/app/application`: casos de uso
- `backend/app/infrastructure`: adapters concretos
- `backend/app/presentation`: rotas e schemas HTTP
- `backend/app/main.py`: bootstrap e injecao de dependencias

## Requisitos
- Node.js 20+
- Python 3.10+

## Rodando localmente com Taskipy

### 1. Setup inicial
```bash
python3 -m pip install taskipy
task setup
```

## Login seguro (preparado para JWT)
- O frontend envia credenciais para `POST /api/login` do Next.js (`frontend/src/app/api/login/route.ts`).
- Essa rota server-side encaminha para o FastAPI usando `BACKEND_URL`.
- Isso evita expor a URL interna do backend no browser e facilita evoluir para JWT em cookie HttpOnly.

### 2. Rodar backend e frontend juntos
```bash
task dev
```

### 3. Rodar serviços separadamente
Em terminais diferentes:
```bash
task backend
```
```bash
task frontend
```
Se for a primeira execução, rode `task setup` antes.

Acesse:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- Swagger: http://localhost:8000/docs

## Rodando com Docker Compose
```bash
task docker
```

## Endpoints
- `GET /` -> mensagem básica
- `POST /api/login` -> login (placeholder preparado para JWT)
