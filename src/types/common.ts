import { ReactNode } from 'react';

// Any component that contains children
export interface GenericProps {
  children?: ReactNode;
  className?: string;
}

// All data items that have an ID
export interface GenericItem {
  id: number;
}

export interface PaginationParams {
  skip: number;
  limit: number;
}

export interface ReturnManyQueryModel<T> {
  total: number;
  limit: number;
  skip: number;
  items: T[];
}

export interface ReturnOneQueryModel {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: string;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
