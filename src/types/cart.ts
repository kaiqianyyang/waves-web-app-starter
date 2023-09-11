import { GetItemQueryModel } from '../pages/cart/types';
import { GetProductQueryModel } from '../pages/home/types';

export interface IUserItem {
  id: number;
  products: GetProductQueryModel;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface ICart {
  carts: GetItemQueryModel;
  total: number;
  skip: number;
  limit: number;
}
