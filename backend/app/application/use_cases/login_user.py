from app.domain.entities.auth import LoginCredentials, LoginResult
from app.domain.ports.auth_port import AuthPort


class LoginUserUseCase:
    def __init__(self, auth_port: AuthPort) -> None:
        self._auth_port = auth_port

    def execute(self, email: str, password: str) -> LoginResult:
        credentials = LoginCredentials(email=email, password=password)
        return self._auth_port.authenticate(credentials)
