import React, { Suspense } from 'react';

const Loading = ({ children }) => {

  return (
    <Suspense
      fallback={
        <div data-testid="loading">Loading...</div>
      }
    >
      {children}
    </Suspense>
  );
};

export default Loading;
