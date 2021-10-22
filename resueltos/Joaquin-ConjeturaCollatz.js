function collatz(num) {
  let resultado = num;
  let resultados = [];
  do {
    if (resultado % 2 === 0) {
      resultado = resultado / 2;
      resultados.push(resultado);
    } else {
      resultado = resultado * 3 + 1;
      resultados.push(resultado);
    }
  } while (resultado !== 4);

  return resultados;
}

let array = collatz(88);

console.log(array);
