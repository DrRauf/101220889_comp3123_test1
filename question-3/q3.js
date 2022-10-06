// Rauf Anata - 101220889

const fs = require("fs");

  const path = "./logs";

const createLog = () => {

  if (!fs.existsSync(path)) {
    fs.mkdir(path, (err)=>{
        if (err) {
            console.error(`Creating Folder Logs was unsuccessful\n`);
          }
          console.log("\nLogs Folder created successfully!\n");
    });
  }

  for (let i = 0; i < 10; i++) {
    fs.appendFile(`${path}/log${i}.txt`, `file Created by Rauf`, (err) => {
      if (err) {
        console.error(`Creating File 'log${i}.txt' was unsuccessful\n`);
      }
      console.log(`File 'log${i}.txt' Created successfully`);
    });
  }
};

const removeLog = () => {

  if (!fs.existsSync(path)) {
    console.log("Logs Folder doesn't exist!");
  }
  for (let i = 0; i < 10; i++) {
    fs.unlink(`${path}/log${i}.txt`, (err) => {
      if (err) {
        console.error(`Deleting File 'log${i}.txt' was unsuccessful\n`);
      }
      console.log(`File 'log${i}.txt' deleted successfully`);
    });
  }
  fs.rmdir(path, err => {
    if (err) {
    console.error("Deleting Folder Logs was unsuccessful\n");
  }
  console.log("\nLogs Folder deleted successfully!\n");
  })
}

//createLog();
//removeLog();
