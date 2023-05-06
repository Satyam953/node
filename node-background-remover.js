// import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageFile } from "remove.bg";
const { removeBackgroundFromImageFile,RemoveBgResult,RemoveBgError } = require('remove.bg');

// const localFile = "./local/file/name.jpg";
// const outputFile = `${__dirname}/out/img-removed-from-file.png`;
const localFile = '/Users/Pro/Documents/doc/njs/node/upload/images/abcd.jpg'; 
const outputFile = 'uploads/asdf.jpg';

const remove = async function createBackgroundRemover() {
    await  removeBackgroundFromImageFile({
        path: localFile,
        apiKey: "zB49y4UrUhJfFeSUGPFkbEAG",
        size: "regular",
        type: "auto",
        scale: "50%",
        outputFile 
        }).then((result) => {
        console.log(`File saved to ${outputFile}`);
        const base64img = result.base64img;
        }).catch((errors) => {
        console.error("*********")
        console.log(JSON.stringify(errors));
        console.error("*********")
    });
}
module.exports ={remove};