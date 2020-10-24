#! /usr/bin/node

import merge from 'easy-pdf-merge';
import inquirer from 'inquirer';
import walk from 'walk';

inquirer.prompt([
  {
    name: "mesclar",
    type: "confirm",
    message: "Deseja adicionar a tag de merged ao nome do arquivo?"
  },
  {
    name: "safety",
    type: "list",
    message: "Qual o tipo de safety você deseja utilizar?\n(Selecione qualquer opção caso tenha selecionado Não na opção anterior)",
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

    merge(source, `${answer.caminho}${answer.novo}${answer.mesclar ? answer.safety : ''}.pdf`, (err) => {
      if (err) {
        return "success";
      } else {
        return "fail";
      }
    });
  });
  
}).catch(err => console.log("Algo aconteceu"))