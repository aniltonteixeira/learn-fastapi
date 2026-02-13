from dataclasses import dataclass


@dataclass(frozen=True)
class LoginCredentials:
    email: str
    password: str


@dataclass(frozen=True)
class LoginResult:
    message: str
    next_step: str
