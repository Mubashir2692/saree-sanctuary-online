from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from ..models import Order
from ..schemas import Order, OrderCreate

router = APIRouter(prefix="/api/orders", tags=["orders"])

@router.post("/", response_model=Order)
def create_order(order: OrderCreate, db: Session = Depends(get_db)):
    db_order = Order(**order.dict())
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    return db_order

@router.get("/", response_model=List[Order])
def get_orders(db: Session = Depends(get_db)):
    orders = db.query(Order).all()
    return orders