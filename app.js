import path from 'path';
import os from 'os';
import walk from 'walk';
import inquirer from 'inquirer';
import merge from 'easy-pdf-merge';

inquirer.prompt([
  {
    name: "mesclar",
    type: "confirm",
    message: "Deseja mesclar?"
  },
  {
    name: "safety",
    type: "list",
    message: "Qual o tipo de safety vc quer?",
    choices: ["Merge", "_merged", "merged"]
  },
  {
    name: "caminho",
    type: "input",
    message: "Qual o diretorio? (Diretório deve finalizar em /)",
  },
  {
    name: "novo",
    type: "input",
    message: "Qual o nome do novo arquivo?",
  }
]).then(answer => {
  if (answer.mesclar) {
    console.log("Início da Mescla do PDF!!!")

    let source = [];

    const walker = walk.walk(answer.caminho, {
      followLinks: false,
      filters: ["Merge", "merged", "_merged"]
    });

    walker.on("files", (root, fileStat, next) => {
      fileStat.forEach(file => {
        if (file.name.includes('.pdf')) {
          if ((file.name.includes('Merge') || (file.name.includes('merged')) || (file.name.includes('_merged')))) {
            return false;
          } else {
            source.push(`${answer.caminho}${file.name}`);
          }
        }

      })

      merge(source, `${answer.caminho}${answer.novo}${answer.safety}.pdf`, (err) => {
        if (err) {
          return "success";
        } else {
          return "fail";
        }
      });
    });



  }
}).catch(err => console.log("Algo aconteceu"))