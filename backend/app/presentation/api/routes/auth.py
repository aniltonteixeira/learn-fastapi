from collections.abc import Callable

from fastapi import APIRouter, Depends

from app.application.use_cases.login_user import LoginUserUseCase
from app.presentation.schemas.auth_schemas import LoginRequestSchema, LoginResponseSchema


def build_auth_router(
    get_login_use_case: Callable[[], LoginUserUseCase],
) -> APIRouter:
    router = APIRouter(prefix="/api", tags=["auth"])

    @router.post("/login", response_model=LoginResponseSchema)
    def login(
        data: LoginRequestSchema,
        use_case: LoginUserUseCase = Depends(get_login_use_case),
    ) -> LoginResponseSchema:
        result = use_case.execute(email=data.email, password=data.password)
        return LoginResponseSchema(message=result.message, next_step=result.next_step)

    return router
