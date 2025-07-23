from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
from api.graphql.schema import schema

app = FastAPI(title="AdBudget API")
app.include_router(GraphQLRouter(schema), prefix="/graphql")

