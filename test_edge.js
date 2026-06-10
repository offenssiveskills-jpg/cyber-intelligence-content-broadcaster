const { spawn } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const args = [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--print-to-pdf=c:\\Users\\LENOVO\\Desktop\\antigravit\\test.pdf',
  'file:///c:/Users/LENOVO/Desktop/antigravit/test.html'
];

console.log('Spawning:', edgePath, args.join(' '));
const proc = spawn(edgePath, args);

proc.stdout.on('data', (data) => {
  console.log(`STDOUT: ${data}`);
});

proc.stderr.on('data', (data) => {
  console.log(`STDERR: ${data}`);
});

proc.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});
