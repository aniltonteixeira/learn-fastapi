# Next.js + FastAPI

Estrutura fullstack com:
- `frontend/`: Next.js (TypeScript, App Router)
- `backend/`: FastAPI

## Requisitos
- Node.js 20+
- Python 3.10+

## Rodando localmente com Taskipy

### 1. Setup inicial
```bash
python3 -m pip install taskipy
task setup
```

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
- `GET /api/health` -> status do backend
