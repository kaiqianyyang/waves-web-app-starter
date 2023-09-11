import { useSuspenseQuery } from '@apollo/client';
import { Fragment } from 'react';
import Grid from '../../../components/grid';
import { testCart } from '../../../dummy-data';
import { GET_CART } from '../../../lib';
import CartItem from '../../../components/cart/cart-item';

function Content() {
  console.log('CARTTTT');
  testCart.carts.forEach((item) => {
    console.log(item);
  });

  return (
    <Fragment>
      <Grid cols={2}>
        <div className=''>
          {/* {testCart.carts.map((item) => (
            // <span key={item.id}>{JSON.stringify(item)}</span>
            <CartItem data={item}  owner={data.profile} />
          ))} */}
        </div>
        <div></div>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Grid>
    </Fragment>
  );
}
Content.displayName = 'Cart Content';

export default Content;
