import styles from './styles.module.css';
import { Fragment } from 'react';
import { ISummary } from '../../types';
import { mergeStyles } from '../../utilities';
import { Button } from '..';

function CartPanel({ subtotal, tax, total }: ISummary) {
  console.log('item: ' + JSON.stringify({ subtotal, tax, total }));

  const handlePay = () => {};

  return (
    <Fragment>
      <div
        className={mergeStyles([
          styles['cart-panel'],
          'radius-3',
          ' w-100',
          'mx-5',
          'my-5',
        ])}
      >
        <div className='v-stack gap-5 w-100'>
          <h1 className={mergeStyles([styles['cart-summary-text']])}>
            Summary
          </h1>

          <div className='h-stack gap-2 w-100'>
            <div
              className={mergeStyles([
                styles['cart-summary-text'],
                'w-100',
                'font-size-4',
              ])}
            >
              Subtotal
            </div>
            <div
              className={mergeStyles([
                styles['cart-summary-text'],
                'justify-content-end',
                'font-size-4',
              ])}
            >
              ${subtotal.toFixed(2)}
            </div>
          </div>
          <div className='h-stack gap-2 w-100'>
            <div
              className={mergeStyles([
                styles['cart-summary-text'],
                'w-100',
                'font-size-4',
              ])}
            >
              Tax
            </div>
            <div
              className={mergeStyles([
                styles['cart-summary-text'],
                'justify-content-end',
                'font-size-4',
              ])}
            >
              ${tax.toFixed(2)}
            </div>
          </div>

          {/* Divider */}
          <hr
            className='solid'
            style={{ borderTop: '1px solid #dddddd' }}
          ></hr>

          <div className='h-stack gap-2 w-100'>
            <div
              className={mergeStyles([
                styles['cart-summary-text'],
                'w-100',
                'font-size-4',
              ])}
            >
              Total
            </div>
            <div
              className={mergeStyles([
                styles['cart-summary-text'],
                'justify-content-end',
                'font-size-4',
              ])}
            >
              ${total.toFixed(2)}
            </div>
          </div>

          {/* Divider */}
          <hr
            className='solid'
            style={{ borderTop: '1px solid #dddddd' }}
          ></hr>
          <Button color={'secondary'} onClick={handlePay}>
            Pay Now
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
CartPanel.displayName = 'Cart Panel';

export default CartPanel;
