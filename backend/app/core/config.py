from pydantic import PostgresDsn
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DB_URL: PostgresDsn

    class Config:
        env_file = ".env"


settings = Settings()
