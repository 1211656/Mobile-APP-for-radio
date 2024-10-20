const { spawn } = require('child_process');

console.log('Starting Flask server...');

const server = spawn('python3', ['../../route.py']);

server.stdout.on('data', (data) => {
  console.log(`Server stdout: ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`Server stderr: ${data}`);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

console.log('Flask server script executed.');