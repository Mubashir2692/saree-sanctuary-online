from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(title="Saree Sanctuary API", version="0.1.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:5173")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers (after app is created)
from app.routers.products import router as products_router
from app.routers.orders import router as orders_router

app.include_router(products_router)
app.include_router(orders_router)

@app.get("/")
def root():
    return {"message": "Saree Sanctuary API – Ready to weave magic! 🧵"}

# Placeholder for products (remove once routers are live)
@app.get("/api/products")
def get_products():
    return {"products": [], "message": "Coming soon..."}  # Seed in next phase

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)