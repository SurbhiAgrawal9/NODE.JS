//CRUD operation using file module

// fs.mkdirSync("thapa")


// fs.writeFileSync("thapa/bio.txt", " hello welcomeee")
// fs.renameSync("thapa/bio.txt" , "mybio.txt");
 const data = fs.readFileSync("thapa/mybio.txt" , "utf8")
 console.log(data)
