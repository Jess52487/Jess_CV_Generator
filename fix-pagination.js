const fs = require('fs');
const path = require('path');
const dir = 'app/components/templates';
fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).forEach(file => {
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  
  // Add break-inside-avoid to Experience wrappers
  content = content.replace(/<div key=\{exp\.id\} className="/g, '<div key={exp.id} className="break-inside-avoid print:break-inside-avoid ');
  content = content.replace(/<div key=\{exp\.id\}>/g, '<div key={exp.id} className="break-inside-avoid print:break-inside-avoid mb-[8px]">');
  
  // Add break-inside-avoid to Education wrappers
  content = content.replace(/<div key=\{edu\.id\} className="/g, '<div key={edu.id} className="break-inside-avoid print:break-inside-avoid ');
  content = content.replace(/<div key=\{edu\.id\}>/g, '<div key={edu.id} className="break-inside-avoid print:break-inside-avoid mb-[8px]">');
  
  fs.writeFileSync(p, content);
});
