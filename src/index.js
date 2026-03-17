export function greet(name = 'CI/CD Learner') {
  return `Hello, ${name}!`;
}

if (process.argv[1] && process.argv[1].includes('index.js')) {
  console.log(greet(process.argv[2] || 'CI/CD Learner'));
}
