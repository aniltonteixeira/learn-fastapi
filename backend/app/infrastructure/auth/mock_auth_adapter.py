from app.domain.entities.auth import LoginCredentials, LoginResult


class MockAuthAdapter:
    def authenticate(self, credentials: LoginCredentials) -> LoginResult:
        # Mantem apenas comportamento placeholder; JWT real vem no proximo passo.
        _ = credentials
        return LoginResult(
            message="Credenciais recebidas com seguranca.",
            next_step="jwt_auth_pending",
        )
