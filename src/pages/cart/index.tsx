import { ErrorFallback, LoadingFallback } from '../../components';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Content } from './ui';

/**
 * A page component that renders components for the user page.
 */
function CartPage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        <Content />
      </Suspense>
    </ErrorBoundary>
  );
}
CartPage.displayName = 'Cart Page';

export default CartPage;
