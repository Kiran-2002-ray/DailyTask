import React, { Suspense, useState } from 'react';

// Lazy loading the component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App3 = () => {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div>
      <h1>React Lazy Loading Example</h1>
      <button onClick={() => setShowLazy(true)}>Load Lazy Component</button>
      {showLazy && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default App3;
