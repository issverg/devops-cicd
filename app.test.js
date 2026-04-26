const { add, greet } = require('./app');

// Тест 1
if (add(2, 3) !== 5) {
  console.error('❌ add test failed!');
  process.exit(1);
}
console.log('✅ add test passed');

// Тест 2
if (greet('Nikita') !== 'Hello, Nikita!') {
  console.error('❌ greet test failed!');
  process.exit(1);
}
console.log('✅ greet test passed');

console.log('🎉 All tests passed!');
