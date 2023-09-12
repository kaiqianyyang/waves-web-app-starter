import { GetProductQueryModel } from '../../pages/home/types';
import { ISummary, ReturnManyQueryModel } from '../../types';

export type GetItemQueryModel = ReturnManyQueryModel<ItemProps>;

export interface CartProps {
  products: CartProductsProps;
  summary: ISummary;
}

export interface CartProductsProps {
  items: GetItemQueryModel;
  total: number;
}

export interface ItemProps {
  id: number;
  items: GetProductQueryModel;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
