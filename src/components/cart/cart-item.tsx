import styles from './styles.module.css';
import { Fragment } from 'react';
import { IProduct } from '../../types';
import { calculateDiscountedPrice, mergeStyles } from '../../utilities';
import { Button } from '..';

function CartItem({
  thumbnail,
  rating,
  stock,
  brand,
  images,
  title,
  description,
  price,
  discountPercentage,
  category,
  quantity,
}: IProduct) {
  // const [imageSrc, setImageSrc] = useState(data.thumbnail);

  // const resetImageSrc = () => setImageSrc(data.thumbnail);
  console.log(
    'item: ' +
      JSON.stringify({
        thumbnail,
        rating,
        stock,
        brand,
        images,
        title,
        description,
        price,
        discountPercentage,
        category,
      }),
  );

  return (
    <Fragment>
      <div>
        <div className='h-stack gap-2 m-3'>
          <div className='v-stack gap-1 justify-content-center'>
            <img
              className=''
              style={{ width: '250px', aspectRatio: '1/1' }}
              src={thumbnail}
              alt='waves gif'
            />
          </div>
          <div className='v-stack w-100 mx-3'>
            <div className='h-stack w-100 gap-2'>
              <div className='v-stack w-100'>
                <h2 className='mb-2'>{title}</h2>
                <div
                  className={mergeStyles([
                    styles['cart-item-info'],
                    'font-weight-500',
                  ])}
                >
                  {brand}
                </div>
                <div
                  className={mergeStyles([
                    styles['cart-item-info'],
                    'font-weight-500',
                  ])}
                >
                  {category}
                </div>
                <div
                  className={mergeStyles([
                    styles['cart-item-info'],
                    'font-weight-500',
                    'my-3',
                  ])}
                >
                  Quantity: {quantity}
                </div>
              </div>
              <div
                className={mergeStyles([
                  styles['product-card-price'],
                  'h-stack',
                  'gap-2',
                  'justify-content-end',
                ])}
              >
                <span>
                  ${calculateDiscountedPrice(price, discountPercentage)}
                </span>
                <s className='text-stroke text-base-400'>${price}</s>
              </div>
            </div>

            {/* Divider */}
            <hr
              className='solid my-3'
              style={{ borderTop: '1px solid #dddddd' }}
            ></hr>
            <Button>Remove</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
CartItem.displayName = 'Cart Item';

export default CartItem;
