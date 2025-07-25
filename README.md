# AdBudget

[![CI](https://github.com/YOUR_USER/adbudget/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USER/adbudget/actions)  
[![Coverage](https://img.shields.io/codecov/c/github/YOUR_USER/adbudget)](https://codecov.io/gh/YOUR_USER/adbudget)

A minimal marketing-analytics demo: create/list ad campaigns (id, name, budget) via REST & GraphQL, with a React/Mantine form.

Tech stack  
- Backend: FastAPI (async) + SQLAlchemy 2.0 async + asyncpg  
- GraphQL: Strawberry  
- Config: Pydantic Settings + uv (Astral’s CLI)  
- Frontend: React + Mantine + GraphQL Codegen  
- Migrations: Alembic  
- Dev: Docker Compose  
- CI: GitHub Actions  

## Quick Start

```bash
git clone https://github.com/YOUR_USER/adbudget.git
cd adbudget

# 1. DB + backend
docker compose up -d db
cd backend
uv sync --all-extras
cp .env.example .env
uv run alembic upgrade head
uv run uvicorn app.main:app --reload  # :8000

# 2. Frontend
cd ../frontend
npm install
npm run dev                            # :3000
```

- REST docs ➝ http://localhost:8000/docs  
- GraphQL IDE ➝ http://localhost:8000/graphql  
- UI ➝ http://localhost:3000

## Env Variables

Copy `backend/.env.example` → `backend/.env`:

```env
DATABASE_URL=postgresql+asyncpg://postgres:postgres@db:5432/adbudget
```

## Structure

```
adbudget/
├─ backend/
│  ├─ app/
│  │  ├─ core/        # config.py (Pydantic Settings), db.py
│  │  ├─ models/      # ORM
│  │  ├─ api/
│  │  │  ├─ rest/     # REST routers
│  │  │  └─ graphql/  # Strawberry schema
│  │  └─ main.py      # FastAPI app
│  ├─ pyproject.toml  # deps + dev-deps
│  └─ Dockerfile
├─ frontend/
│  ├─ src/
│  │  └─ components/  # CampaignForm.tsx
│  ├─ package.json
│  └─ Dockerfile
└─ docker-compose.yml
```

## Commands
failed to solve: ghcr.io/astral-sh/uv:0.2-python3.11-bookworm-slim: failed to resolve source metadata for ghcr.io/astral-sh/uv:0.2-python3.11-bookworm-slim: ghcr.io/astral-sh/uv:0.2-python3.11-bookworm-slim: not found
```bash
# Backend
uv sync --all-extras
uv run alembic revision --autogenerate -m "msg"
uv run alembic upgrade head
uv run uvicorn app.main:app --reload

# Frontend
npm install
npm run gen     # GraphQL Codegen
npm run dev
npm run build

# Tests
uv run pytest --cov=app
npm test
```

## Links

- uv: https://docs.astral.sh/uv/  
- Pydantic Settings: https://docs.pydantic.dev/latest/concepts/settings/  
- FastAPI: https://fastapi.tiangolo.com/  
- SQLAlchemy Async: https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html  
- Strawberry: https://strawberry.rocks/docs/  
- Docker Compose: https://docs.docker.com/compose/  
- GitHub Actions: https://docs.github.com/actions
