const fs = require('fs');
const { remove } = require('./node-background-remover');

// Define the input and output file paths
const inputFilePath = '/Users/Pro/Documents/doc/njs/node/upload/images/hhhh.jpeg'; 
const outputFilePath = '/Users/Pro/Documents/doc/njs/node/uploads/aaaa.jpeg';

// Load the input image from file
const inputImage = fs.readFileSync(inputFilePath);

// Create a background remover instance
// const backgroundRemover = createBackgroundRemover();

// Remove the background from the image
remove(inputImage) .then((outputImage) => {

    // Write the output image to file
fs.writeFileSync(outputFilePath, outputImage);

console.log('Background removed successfully!'); })
.catch((error) => {
console.error('Error removing background:', error);
});