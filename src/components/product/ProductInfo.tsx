import { calculateDiscountedPrice, mergeStyles } from '../../utilities';
import { ProductCardProps } from './types';
import styles from './styles.module.css';
import { Button } from '..';


function ProductInfo({ data }: ProductCardProps) {

  return (
      <div className='v-stack gap-3'>
        <div
            className={mergeStyles([
            styles['product-card-price'],
            'h-stack',
            'gap-2',
            'font-weight-500',
            ])}
        >
            <span>
            $
            {calculateDiscountedPrice(data.price, data.discountPercentage)}
            </span>
            <s className='text-stroke text-base-400 font-weight-500'>${data.price}</s>
            <span 
                className={mergeStyles([
                styles['product-discount'], 
                'font-weight-500'
                ])}>
                {data.discountPercentage}% off
            </span>
        </div>

        <span 
            className={styles['product-category']}>
            {
                data.category.charAt(0).toUpperCase() + data.category.slice(1)
            }
        </span>
        {/* Divider */}
        <hr className="solid my-1" style={{ borderTop: "1px solid #dddddd"}}></hr>
        <Button>Add to Cart</Button>

        {/* Divider */}
        <hr className="solid my-1" style={{ borderTop: "1px solid #dddddd"}}></hr>

        <div className='v-stack gap-2'>
            <span className={styles['product-description']}>
                Description:
            </span>
            <span className={styles['product-description']}>
                {data.description}
            </span>
        </div>
      </div>
  );
}
ProductInfo.displayName = 'Product Info';

export default ProductInfo;
