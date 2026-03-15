const fs = require('fs');
const path = require('path');

const dirs = [
  'C:/Users/Kishore Agilan/OneDrive/Documents/coding/wissendurstesic_sample-main/src/pages',
  'C:/Users/Kishore Agilan/OneDrive/Documents/coding/wissendurstesic_sample-main/src/components'
];

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Colors
    content = content.replace(/#e50914/gi, '#ff003c');
    content = content.replace(/229,9,20/g, '255,0,60');
    content = content.replace(/229, 9, 20/g, '255, 0, 60');

    content = content.replace(/#1f51ff/gi, '#2563ff');
    content = content.replace(/31,81,255/g, '37,99,255');
    content = content.replace(/31, 81, 255/g, '37, 99, 255');
    
    // Backgrounds
    content = content.replace(/bg-\[#0a0a0a\]/gi, 'bg-[#050505]');
    content = content.replace(/bg-st-purple/gi, 'bg-st-secondary');
    content = content.replace(/st-purple/gi, 'st-secondary');
    content = content.replace(/#1a0b2e/gi, '#0f0f14');

    // Text
    content = content.replace(/#b3b3b3/gi, '#cbd5e1');
    content = content.replace(/#eeeeee/gi, '#ffffff');

    fs.writeFileSync(filePath, content, 'utf8');
  });
});
console.log('done replacing colors');
