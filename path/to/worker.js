// Example of heavy computation moved to Web Worker
self.addEventListener('message', function(e) {
  const data = e.data;
  // Perform heavy computations
  const result = heavyComputation(data);
  self.postMessage(result);
});

function heavyComputation(data) {
  // ... your computation logic ...
  return computedResult;
} 