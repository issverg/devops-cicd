const { add, greet } = require('./app');

test('add function works', () => {
  if (add(2, 3) !== 5) throw new Error('add failed!');
  console.log('✅ add test passed');
});

test('greet function works', () => {
  if (greet('Nikita') !== 'Hello, Nikita!') throw new Error('greet failed!');
  console.log('✅ greet test passed');
});

console.log('All tests passed! 🎉');
