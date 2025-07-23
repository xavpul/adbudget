import strawberry
from typing import List
from sqlalchemy import select
from models.campaign import Campaign as CampaignModel
from core.database import get_session


@strawberry.type
class Campaign:
    id: int
    name: str
    budget: float


@strawberry.type
class Query:
    @strawberry.field
    async def campaigns(self) -> List[Campaign]:
        async with get_session() as db:
            rows = await db.execute(select(CampaignModel))
            return [
                Campaign(id=c.id, name=c.name, budget=c.budget) for c in rows.scalars()
            ]


schema = strawberry.Schema(query=Query)
