const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Invert white/off-white backgrounds to dark grays
  content = content.replace(/rgba\(255,\s*255,\s*255,\s*([0-9.]+)\)/g, 'rgba(30, 30, 30, $1)');
  content = content.replace(/rgba\(248,\s*248,\s*248,\s*([0-9.]+)\)/g, 'rgba(20, 20, 20, $1)');
  
  // 2. Invert black highlights/borders to white (for visibility)
  // But preserve black in box-shadow. 
  // We can do this by first converting box-shadow rgba(0,0,0) to a temporary placeholder,
  // then converting all other rgba(0,0,0) to rgba(255,255,255),
  // then restoring the box-shadows.
  
  // Replace box-shadow: ... rgba(0,0,0,x) -> box-shadow: ... __BOX_SHADOW_BLACK__x__
  let shadowRegex = /(box-shadow\s*:[^;]+?)rgba\(0,\s*0,\s*0,\s*([0-9.]+)\)/g;
  while (shadowRegex.test(content)) {
    content = content.replace(shadowRegex, '$1__BOX_SHADOW_BLACK__$2__');
  }
  
  // The rest of rgba(0,0,0, x) are likely borders, backgrounds, hover states. Convert to white.
  content = content.replace(/rgba\(0,\s*0,\s*0,\s*([0-9.]+)\)/g, 'rgba(255, 255, 255, $1)');
  
  // Restore box-shadow black
  content = content.replace(/__BOX_SHADOW_BLACK__([0-9.]+)__/g, 'rgba(0, 0, 0, $1)');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

// Process index.css differently to update CSS variables
let indexContent = fs.readFileSync('src/index.css', 'utf8');
indexContent = indexContent.replace('--bg-primary:   #FAFAFA;', '--bg-primary:   #050505;');
indexContent = indexContent.replace('--bg-secondary: #F5F5F5;', '--bg-secondary: #0A0A0A;');
indexContent = indexContent.replace('--bg-card:      #FFFFFF;', '--bg-card:      #111111;');
indexContent = indexContent.replace('--bg-card-hover:#F9F9F9;', '--bg-card-hover:#1A1A1A;');
indexContent = indexContent.replace('--accent:       #000000;', '--accent:       #FFFFFF;');
indexContent = indexContent.replace('--accent-light: #333333;', '--accent-light: #E6E6E6;');
indexContent = indexContent.replace('--accent-glow:  rgba(0, 0, 0, 0.08);', '--accent-glow:  rgba(255, 255, 255, 0.08);');
indexContent = indexContent.replace('--accent-subtle:rgba(0, 0, 0, 0.03);', '--accent-subtle:rgba(255, 255, 255, 0.03);');
indexContent = indexContent.replace('--text-primary: #1A1A1A;', '--text-primary: #FAFAFA;');
indexContent = indexContent.replace('--text-muted:   #666666;', '--text-muted:   #A3A3A3;');
indexContent = indexContent.replace('--text-dim:     #999999;', '--text-dim:     #777777;');
indexContent = indexContent.replace('--border:       rgba(0,0,0,0.08);', '--border:       rgba(255,255,255,0.08);');
indexContent = indexContent.replace('--border-accent:rgba(0,0,0,0.15);', '--border-accent:rgba(255,255,255,0.15);');
fs.writeFileSync('src/index.css', indexContent, 'utf8');

const componentsDir = 'src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.css'));
for (const file of files) {
  processFile(path.join(componentsDir, file));
}
processFile('src/animations.css');

// Also check AnimatedBackground.jsx
let jsxContent = fs.readFileSync('src/components/AnimatedBackground.jsx', 'utf8');
jsxContent = jsxContent.replace(/rgba\(0, 0, 0,/g, 'rgba(255, 255, 255,');
fs.writeFileSync('src/components/AnimatedBackground.jsx', jsxContent, 'utf8');

console.log('Conversion complete!');
