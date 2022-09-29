const fs = require('fs') // File System

fs.readFile('Secoes/Secao_1_Introducao/2_utilizando_modulo/arquivo.txt', 'utf8', (err, data) => { //arrow function
  if(err) {
    console.log(err) //Em caso de erro, printar o erro
    return
  }

  console.log(data) //Print do conteúdo do arquivo.
});
