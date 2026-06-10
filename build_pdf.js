const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const htmlFile = path.join(__dirname, 'Hippolyte_Donfack_CV.html');
const pdfFile = path.join(__dirname, 'Hippolyte_Donfack_CV.pdf');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const args = [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  `--print-to-pdf=${pdfFile}`,
  '--no-margins',
  `file:///${htmlFile.replace(/\\/g, '/')}`
];

console.log('Compiling HTML CV to PDF using Microsoft Edge...');
console.log('Input:', htmlFile);
console.log('Output:', pdfFile);

const proc = spawn(edgePath, args);

let stderrData = '';
proc.stderr.on('data', (data) => {
  stderrData += data.toString();
});

proc.on('close', (code) => {
  if (code === 0 && fs.existsSync(pdfFile)) {
    console.log('Success! PDF compiled successfully.');
    const stats = fs.statSync(pdfFile);
    console.log(`File size: ${(stats.size / 1024).toFixed(2)} KB`);
  } else {
    console.error(`Error: Edge exited with code ${code}`);
    console.error('Stderr:', stderrData);
  }
});
