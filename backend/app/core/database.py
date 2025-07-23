from contextlib import asynccontextmanager
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker

from core.config import settings

engine = create_async_engine(str(settings.DB_URL), echo=True)
AsyncLocalSession = async_sessionmaker(engine, expire_on_commit=False)


@asynccontextmanager
async def get_session() -> AsyncSession:
    async with AsyncLocalSession() as session:
        yield session
