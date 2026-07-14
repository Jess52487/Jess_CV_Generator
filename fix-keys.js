const fs = require('fs');
const path = require('path');
const dir = 'app/components/templates';
fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).forEach(file => {
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/key=\{\`\\\$\{skill\}\-\\\$\{i\}\`\}/g, 'key={`${skill}-${i}`}');
  fs.writeFileSync(p, content);
});
