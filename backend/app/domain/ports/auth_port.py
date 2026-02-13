from typing import Protocol

from app.domain.entities.auth import LoginCredentials, LoginResult


class AuthPort(Protocol):
    def authenticate(self, credentials: LoginCredentials) -> LoginResult:
        ...
