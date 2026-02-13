from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.application.use_cases.login_user import LoginUserUseCase
from app.infrastructure.auth.mock_auth_adapter import MockAuthAdapter
from app.presentation.api.routes.auth import build_auth_router
from app.presentation.api.routes.system import router as system_router


class Container:
    def __init__(self) -> None:
        self.auth_adapter = MockAuthAdapter()
        self.login_user_use_case = LoginUserUseCase(self.auth_adapter)


container = Container()


def get_login_use_case() -> LoginUserUseCase:
    return container.login_user_use_case


def create_app() -> FastAPI:
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

    app.include_router(system_router)
    app.include_router(build_auth_router(get_login_use_case))

    return app


app = create_app()
