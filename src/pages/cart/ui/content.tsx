import styles from '../../../components/navigation-bar/styles.module.css';
import { useQuery } from '@apollo/client';
import { Fragment } from 'react';
import Grid from '../../../components/grid';
import { testCart } from '../../../dummy-data';
import { GET_PROFILE } from '../../../lib';
import CartItem from '../../../components/cart/cart-item';
import { useAuthContext } from '../../../hooks';
import { IProfile } from '../../../types';
import CartPanel from '../../../components/cart/cart-panel';

function Content() {
  const { user } = useAuthContext();
  let products: any[] = [];
  let summary = null;

  const { loading, error, data } = useQuery<
    {
      profile: IProfile;
    },
    { id: number }
  >(GET_PROFILE, { variables: { id: user ? user.id : 15 } }); // -1

  if (error) {
    return <div className='error'>{error.message}</div>;
  }

  if (loading) {
    return <div className={styles['navigation-placeholder']} />;
  }

  console.log('CARTTTT');
  testCart.products.items.forEach((item) => {
    if (item.userId === 30) {
      products = item.products;
    }
  });
  summary = testCart.summary;

  return (
    <Fragment>
      <Grid cols={2}>
        <div className='' style={{ width: '800px' }}>
          {products.map((item) => (
            // <span key={item.id}>{JSON.stringify(item)}</span>
            <CartItem
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              rating={item.rating}
              stock={item.stock}
              brand={item.brand}
              images={item.images}
              title={item.title}
              description={item.description}
              price={item.price}
              discountPercentage={item.discountPercentage}
              category={item.category}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div style={{}}>
          <CartPanel
            subtotal={summary.subtotal}
            tax={summary.tax}
            total={summary.total}
          />
        </div>
      </Grid>
    </Fragment>
  );
}
Content.displayName = 'Cart Content';

export default Content;
