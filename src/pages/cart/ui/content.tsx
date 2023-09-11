import { IProfile } from '../../../types';
import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@apollo/client';
import { GET_PROFILE } from '../../../lib';
import { Fragment } from 'react';

function Content() {
  return (
    <Fragment>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </Fragment>
  );
}
Content.displayName = 'Cart Content';

export default Content;
