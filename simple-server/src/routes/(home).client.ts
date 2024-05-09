import('../features/cool-canvas.js');

console.log('Hello from client! (Home)');

requestIdleCallback(() => {
	import('../features/counters/my-lit-counter.js');
	import('../features/counters/my-vanilla-counter.js');
});
