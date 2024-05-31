# Core Modules | File System Node.js Module
const fs = require("fs")
//creating new file
// fs.writeFileSync("read.txt", "welcome to thapa technical" );
// fs.writeFileSync("read.txt" , "time ")
// fs.appendFileSync("read.txt" , "this is thapa tutorial")


//node.js includes an additional Data type called Buffer  
// not available in Browser's javaScript
// Buffer is mainly used to store binary data
//while reading from  a file or recieving packats over network 
// it id look like this :-      PS D:\NodeJs\Thapa-Teachnical> node script.js
 //                               <Buffer 74 69 6d 65 20 74 68 69 73 20 69 73 20 74 68 61 70 61 20 74 75 74 6f 72 69 61 6c>

// const buf_data = fs.readFileSync("read.txt");
// org_data = buf_data.toString();    // need to convert into string
// console.log(org_data)


// fs.renameSync("read.txt", "readwrite.txt");


