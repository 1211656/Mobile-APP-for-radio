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

server.on('error', (err) => {
  console.error(`Failed to start server: ${err}`);
});

console.log('Flask server script executed.');