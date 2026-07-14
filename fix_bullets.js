const fs = require('fs');
const path = require('path');
const templatesDir = path.join(__dirname, 'app/components/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(templatesDir, file), 'utf8');
  
  // Remove native bullets to avoid html2canvas bug
  content = content.replace(/list-disc list-outside pl-\[20px\]/g, 'flex flex-col space-y-[4px]');
  // Also remove standalone list-disc just in case
  content = content.replace(/list-disc/g, '');
  
  // For the actual <li> elements, we replace them with a flex container.
  content = content.replace(/<li key=\{skill\}>(.*?)<\/li>/g, '<li key={skill} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap">$1</span></li>');
  
  content = content.replace(/<li key=\{skill\} className="((?!flex items-start)[^"]*)">(.*?)<\/li>/g, '<li key={skill} className="flex items-start $1"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap">$2</span></li>');
  
  // Robust filter
  content = content.replace(/\.filter\(s => s\.trim\(\) !== ""\)/g, '.filter(s => s && s.trim().length > 0)');
  
  fs.writeFileSync(path.join(templatesDir, file), content, 'utf8');
}
console.log('Fixed bullets in all templates');
