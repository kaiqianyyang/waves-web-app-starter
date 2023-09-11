import { ErrorFallback, LoadingFallback } from '../../components';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Content } from './ui';

/**
 * A page component that renders components for the login page.
 */
function LoginPage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        <Content />
      </Suspense>
    </ErrorBoundary>
  );
}
LoginPage.displayName = 'Login Page';

export default LoginPage;
