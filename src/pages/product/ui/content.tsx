import { IProduct, PaginationParams } from '../../../types';
import { useSuspenseQuery } from '@apollo/client';
import { GET_PRODUCT } from '../../../lib';
import { Fragment } from 'react';
import { Grid, ProductSlide, ProductInfo } from '../../../components';
import { useParams } from 'react-router-dom';

function Content() {
  const params = useParams();
  
  const { data } = useSuspenseQuery<
    { 
      product: IProduct 
    },
    { id: number }
  >(GET_PRODUCT, { variables: { id: parseInt(params.id || '-1') } });

  console.log("data")
  console.log(data)

  return (
    <Fragment>
      <div className="v-stack gap-2 mr-3 mt-7">
        <div className="v-stack gap-2 mt-5">
          <h1>Title: {data.product.title}</h1>
          <h2>Brand: {data.product.brand}</h2>
        </div>
        {/* Divider */}
        <hr className="solid my-2" style={{ borderTop: "1px solid #dddddd"}}></hr>
        <Grid cols={2}>
          <ProductSlide data={data.product} />
          <ProductInfo data={data.product} />
        </Grid>
      </div>
    </Fragment>
  );
}
Content.displayName = 'Product Content';

export default Content;
