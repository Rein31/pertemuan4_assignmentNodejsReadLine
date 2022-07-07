// core module
// file system
const fs = require("fs");

// console.log(fs);

// menuliskan string ke file (Synchronous)
// fs.writeFileSync('test.txt','Hellow World secara synchronous Ver1.0!');

// fs.readFile('test.txt','utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// })

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  rl.question("What is yor email? ", (email) => {
    rl.question("What is your phone number? ", (pnumber) => {
      console.log(
        `Thank you ${name}, your email is ${email}, and your phone number is ${pnumber}`
      );

      rl.close();
    });
  });
});
