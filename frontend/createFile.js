const fs = require('fs');


// Read the content of the .env file
const envFileContent = fs.readFileSync('.env', 'utf-8');

// Extract the BUILD_PATH variable from the .env content
const buildPathMatch = envFileContent.match(/BUILD_PATH=(.+)/);
const buildFolderPath = buildPathMatch ? buildPathMatch[1] : 'build';

// Path for the new file within the build folder
const newFilePath = `${buildFolderPath}/.htaccess`;

// Path to the existing file
const existingFilePath = '.htaccess';

// Read content from the existing file
const existingFileContent = fs.readFileSync(existingFilePath, 'utf-8');

// Create the new file
fs.writeFileSync(newFilePath, existingFileContent);

console.log(`New file created at: ${newFilePath} with content copied from ${existingFilePath}`);
