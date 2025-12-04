from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Text, ARRAY
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from .database import Base
from typing import List

class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    slug = Column(String, unique=True, index=True)
    parent_id = Column(Integer, ForeignKey("categories.id"))

    products = relationship("Product", back_populates="category")

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    slug = Column(String, unique=True, index=True)
    description = Column(Text)
    price = Column(Float)
    sale_price = Column(Float, nullable=True)
    category_id = Column(Integer, ForeignKey("categories.id"))
    images = Column(ARRAY(String))  # List of image URLs
    variants = Column(ARRAY(String))  # Simple list for sizes/colors/stock
    tags = Column(ARRAY(String))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    category = relationship("Category", back_populates="products")

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String)
    customer_phone = Column(String)
    address = Column(Text)
    items = Column(ARRAY(String))  # List for [{product_id, variant, qty, price}]
    total_price = Column(Float)
    status = Column(String, default="new")  # new/confirmed/packed/shipped/delivered/cancelled
    created_at = Column(DateTime(timezone=True), server_default=func.now())