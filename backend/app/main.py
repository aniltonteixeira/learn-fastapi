from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="FastAPI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root() -> dict[str, str]:
    return {"message": "FastAPI funcinando"}


class LoginRequest(BaseModel):
    email: str
    password: str


@app.post("/api/login")
def login(data: LoginRequest) -> dict[str, str]:
    return {
        "message": "Dados recebidos com sucesso",
        "email": data.email,
        "password_length": str(len(data.password)),
    }
