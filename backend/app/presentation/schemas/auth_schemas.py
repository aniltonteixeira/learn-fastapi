from pydantic import BaseModel, Field


class LoginRequestSchema(BaseModel):
    email: str = Field(..., min_length=5, max_length=254)
    password: str = Field(..., min_length=8, max_length=128)


class LoginResponseSchema(BaseModel):
    message: str
    next_step: str
