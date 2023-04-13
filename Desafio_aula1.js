/*a média gasta durante uma viagem abastecendo com Etanol
*/

const precoCombustivel = 5.79;
const gastoMedio = 12;
const distancia = 1580;

const LitrosGasto = distancia / gastoMedio;
const valorGasto = LitrosGasto * precoCombustivel;
console.log(valorGasto.toFixed(2));