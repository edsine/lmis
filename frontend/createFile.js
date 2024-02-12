const fs = require('fs');

// Path to the build folder
const buildFolderPath = 'build';

// Path for the new file within the build folder
const newFilePath = `${buildFolderPath}/.htaccess`;

// Path to the existing file
const existingFilePath = '.htaccess';

// Read content from the existing file
const existingFileContent = fs.readFileSync(existingFilePath, 'utf-8');

// Create the new file
fs.writeFileSync(newFilePath, existingFileContent);

console.log(`New file created at: ${newFilePath} with content copied from ${existingFilePath}`);
